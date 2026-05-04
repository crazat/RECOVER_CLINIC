"""
Update preprint metadata JSONs with Zenodo DOI assignments (2026-05-04).
17 papers received DOIs. Add 'doi' field. Add stub for paper #43 if missing.
Per user request: hide platform info (Zenodo not advertised). DOI is sufficient.
"""
import json
from pathlib import Path

DOI_MAP = {
    "embelia_ribes_review":           "10.5281/zenodo.20018329",
    "emb3_scar_case_study":           "10.5281/zenodo.20018333",
    "pigmentation_screening":         "10.5281/zenodo.20018337",
    "alopecia_screening":             "10.5281/zenodo.20018339",
    "acne_microbiome":                "10.5281/zenodo.20018370",
    "photoaging_egcg":                "10.5281/zenodo.20018372",
    "abfe_methodology":               "10.5281/zenodo.20018254",
    "cross_disease_ipf":              "10.5281/zenodo.20018374",
    "chronotherapy_jaoryuju":         "10.5281/zenodo.20018376",
    "open_source_perspective":        "10.5281/zenodo.20018343",
    "piezo1_mlck_alopecia":           "10.5281/zenodo.20018378",
    "topical_pbpk_methodology":       "10.5281/zenodo.20018345",
    "universal_scaffold":             "10.5281/zenodo.20018349",
    "r15_chromanol_safety_triage":    "10.5281/zenodo.20018351",
    "r16_topical_chromanol_lead":     "10.5281/zenodo.20018353",
    "active_learning_multifidelity":  "10.5281/zenodo.20018356",
    "r17_chromanol_generative_atlas": "10.5281/zenodo.20018359",
}

PUBLICATION_DATE = "2026-05-04"

DATA_DIR = Path(r"C:\Projects\recover_clinic\src\data\preprints")

def find_file_by_paper_id_suffix(suffix: str) -> Path | None:
    matches = list(DATA_DIR.glob(f"*_{suffix}_metadata.json"))
    return matches[0] if matches else None

def update_existing(slug: str, doi: str) -> bool:
    f = find_file_by_paper_id_suffix(slug)
    if not f:
        return False
    data = json.loads(f.read_text(encoding="utf-8"))
    data["doi"] = doi
    data["status"] = "published"
    data["publication_date"] = PUBLICATION_DATE
    f.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return True

def create_stub_43(slug: str, doi: str) -> Path:
    f = DATA_DIR / f"43_{slug}_metadata.json"
    stub = {
        "paper_id": f"43_{slug}",
        "title": "RECOVER R17: chromanol generative atlas (in silico)",
        "abstract": "Manuscript metadata to be finalized. DOI assigned via Zenodo deposit.",
        "keywords": ["chemistry", "generative chemistry", "natural products"],
        "authors": [
            {
                "name": "HanCheongWoo",
                "affiliations": [
                    "Genesis_Medicine Lab, Seoul, Republic of Korea",
                    "HAN PREDICT, Inc. (hanpredict.com)",
                    "Recover Korean Medicine Clinic (recover-clinic.kr)"
                ],
                "orcid": "0009-0004-4805-8815",
                "email": "admin@hanpredict.com",
                "corresponding": True
            }
        ],
        "license": "CC-BY 4.0",
        "code_url": "https://github.com/crazat/genesis_medicine",
        "category": "chemistry",
        "subcategory": "generative chemistry",
        "manuscript_path": "preprints/43_r17_chromanol_generative_atlas/manuscript.md",
        "pdf_path": "preprints/43_r17_chromanol_generative_atlas/manuscript.pdf",
        "n_figures": 0,
        "word_count_md": 0,
        "disclaimer": "In silico only. No clinical claim. Wet-lab and IRB pending.",
        "funding": "Self-funded by HAN PREDICT, Inc.",
        "competing_interests": "Author is founder of HAN PREDICT, Inc. and operator of Recover Korean Medicine Clinic. No commercial product is sold based on these results.",
        "ai_disclosure": {
            "used": True,
            "tool": "Claude (Anthropic, Opus 4.7)",
            "role": "drafting + tables + editorial support",
            "icmje_compliant": True,
            "note": "Author verified all claims; AI not used for data or hypotheses."
        },
        "title_ko": "RECOVER R17: 크로마놀 생성 atlas (in silico)",
        "doi": doi,
        "status": "published",
        "publication_date": PUBLICATION_DATE
    }
    f.write_text(json.dumps(stub, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return f

def mark_remaining_as_draft():
    """Files without DOI in this batch get explicit status: draft."""
    all_files = list(DATA_DIR.glob("*_metadata.json"))
    updated_slugs = set(DOI_MAP.keys())
    for f in all_files:
        data = json.loads(f.read_text(encoding="utf-8"))
        paper_id = data.get("paper_id", "")
        # Extract slug (everything after the leading number_)
        if "_" in paper_id:
            num_part, _, slug_part = paper_id.partition("_")
            if slug_part not in updated_slugs and "doi" not in data:
                data["status"] = "draft"
                f.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
                print(f"  [draft] {f.name}")

if __name__ == "__main__":
    print("Updating preprint metadata with Zenodo DOIs...")
    updated = 0
    for slug, doi in DOI_MAP.items():
        if slug == "r17_chromanol_generative_atlas":
            f = find_file_by_paper_id_suffix(slug)
            if f:
                if update_existing(slug, doi):
                    print(f"  [updated] {f.name}")
                    updated += 1
            else:
                created = create_stub_43(slug, doi)
                print(f"  [created stub] {created.name}")
                updated += 1
        else:
            if update_existing(slug, doi):
                updated += 1
                print(f"  [updated] {slug}")
            else:
                print(f"  [MISSING] {slug} — file not found", flush=True)
    print(f"\nTotal updated: {updated}/{len(DOI_MAP)}")
    print("\nMarking remaining files as draft...")
    mark_remaining_as_draft()
    print("\nDone.")
