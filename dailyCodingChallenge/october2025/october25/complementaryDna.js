/*
Given a string representing a DNA sequence, return its complementary strand using the 
following rules:

DNA consists of the letters "A", "C", "G", and "T".
The letters "A" and "T" complement each other.
The letters "C" and "G" complement each other.
For example, given "ACGT", return "TGCA".
*/

/*
1. complementaryDNA("ACGT") should return "TGCA".
2. complementaryDNA("ATGCGTACGTTAGC") should return "TACGCATGCAATCG".
3. complementaryDNA("GGCTTACGATCGAAG") should return "CCGAATGCTAGCTTC".
4. complementaryDNA("GATCTAGCTAGGCTAGCTAG") should return "CTAGATCGATCCGATCGATC".
*/

function complementaryDNA(strand) {
  // Varibale for complementary strand
  let complementaryStrand = '';
  // Loop changing letters
  for (let i = 0; i < strand.length; i++) {
    if (strand[i] === 'A') {
      complementaryStrand += 'T';
    } else if (strand[i] === 'T') {
      complementaryStrand += 'A';
    } else if (strand[i] === 'C') {
      complementaryStrand += 'G';
    } else if (strand[i] === 'G') {
      complementaryStrand += 'C';
    }
  }

  return complementaryStrand;
}
