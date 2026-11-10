// Chapter 2: Environment - Question bank (PSM Study Hub)
// Sources: K Park Textbook of PSM (27th ed.), IAPSM Textbook of Community Medicine (3rd ed.),
// BIS IS 10500:2012, CPCB, WHO guidelines, Bio-Medical Waste Management Rules 2016.

import type { Mcq, Saq } from './types'

export const mcqsEnvironment: Mcq[] = [
  // ---------------- WATER (10) ----------------
  {
    id: 'e2-water-m01',
    topicId: 'water',
    question: 'According to Bradley classification of water-related diseases, schistosomiasis is best classified as a:',
    options: [
      'Waterborne disease',
      'Water-washed disease',
      'Water-based disease',
      'Water-related insect vector disease',
    ],
    answer: 2,
    explanation:
      'Schistosomiasis is water-based: the infective larva develops in an aquatic snail host (fish tapeworm is the other example). Guinea-worm (via Cyclops) is waterborne; trachoma and scabies are water-washed; malaria and dengue are water-related insect vector diseases.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-water-m02',
    topicId: 'water',
    question: 'As per WHO bacteriological standards for drinking water, E. coli (thermotolerant coliforms) must be:',
    options: [
      'Absent in any 100 mL sample',
      'Absent in at least 90 percent of samples',
      'Less than 10 per 100 mL',
      'Absent in any 500 mL sample',
    ],
    answer: 0,
    explanation:
      'WHO requires E. coli / thermotolerant coliforms to be absent in ANY 100 mL drinking water sample; even a single detection means the supply is unfit. E. coli is the indicator organism of fecal pollution.',
    ref: 'WHO',
  },
  {
    id: 'e2-water-m03',
    topicId: 'water',
    question: 'The result of the presumptive coliform test (multiple tube method) for drinking water is reported as:',
    options: [
      'Plate count per mL',
      'Most Probable Number (MPN) of coliforms per 100 mL',
      'H2S score per 100 mL',
      'Turbidity in NTU',
    ],
    answer: 1,
    explanation:
      'The presumptive test is reported as the Most Probable Number (MPN) index of coliforms per 100 mL, followed by the confirmed and completed stages of the coliform test. The H2S strip test is only a rapid field test.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-water-m04',
    topicId: 'water',
    question: 'As per BIS IS 10500:2012, which drinking water parameter has an acceptable limit with NO relaxation in the absence of an alternate source?',
    options: [
      'Total dissolved solids (acceptable 500 mg/L)',
      'Total hardness (acceptable 200 mg/L)',
      'Nitrate (acceptable 45 mg/L)',
      'Chloride (acceptable 250 mg/L)',
    ],
    answer: 2,
    explanation:
      'Nitrate has an acceptable limit of 45 mg/L with no permissible relaxation because of the risk of methaemoglobinaemia in infants; TDS, hardness and chloride have permissible limits of 2000, 600 and 1000 mg/L respectively in the absence of an alternate source.',
    ref: 'BIS IS 10500',
  },
  {
    id: 'e2-water-m05',
    topicId: 'water',
    question: 'For safe chlorination of drinking water, the recommended free residual chlorine level and contact time are:',
    options: [
      '0.05 to 0.1 mg/L after 10 minutes contact',
      '0.2 to 0.5 mg/L after 30 minutes contact',
      '0.5 to 1.0 mg/L after 2 hours contact',
      '2 to 5 mg/L after 5 minutes contact',
    ],
    answer: 1,
    explanation:
      'Chlorination should leave a free residual chlorine of 0.2-0.5 mg/L after a contact period of 30 minutes; HOCl is the active disinfecting agent.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-water-m06',
    topicId: 'water',
    question: 'A slow sand filter in a water works shows a declining output after weeks of continuous operation. The correct action to restore its efficiency is:',
    options: [
      'Backwash the filter with air and water',
      'Scrape off and replace the top 2-3 cm sand layer',
      'Increase the coagulant dose before filtration',
      'Replace the entire sand bed',
    ],
    answer: 1,
    explanation:
      'Slow sand filters are cleaned by scraping off the top 2-3 cm of sand along with the biological vital layer (schmutzdecke), which regrows on rest; backwashing is the cleaning method used for RAPID sand filters.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-water-m07',
    topicId: 'water',
    question: 'A rapid sand filter differs from a slow sand filter in that it:',
    options: [
      'Removes 98-99 percent of bacteria',
      'Works mainly through the biological vital layer',
      'Removes 80-90 percent of bacteria',
      'Uses plain sedimentation as pretreatment',
    ],
    answer: 2,
    explanation:
      'A rapid sand filter (rate 3000-6000 L/hour/m2) works by mechanical/physical-chemical action and removes 80-90 percent of bacteria; it needs coagulation plus sedimentation as pretreatment and is cleaned by backwashing. The slow sand filter (rate 0.1-0.4 m3/hour/m2) removes 98-99 percent of bacteria by biological action.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-water-m08',
    topicId: 'water',
    question: 'Hardness of a water sample is due to bicarbonates of calcium and magnesium. The simplest method to remove this hardness is:',
    options: [
      'Chlorination',
      'Zeolite (Permutit) ion-exchange',
      'Adding alum',
      'Boiling',
    ],
    answer: 3,
    explanation:
      'Bicarbonate (temporary) hardness is removed simply by boiling; permanent hardness due to sulphates and chlorides requires ion-exchange (zeolite/Permutit). Hardness is expressed as CaCO3 equivalents, and hard water is not injurious to health.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-water-m09',
    topicId: 'water',
    question: 'The Nalgonda technique is used for:',
    options: [
      'Softening of hard water by zeolite',
      'Disinfection of water by excess chlorine',
      'Defluoridation of water using alum, lime and bleaching powder',
      'Removal of arsenic by activated carbon',
    ],
    answer: 2,
    explanation:
      'The Nalgonda technique is a defluoridation method using alum, lime and bleaching powder; activated alumina is another defluoridating agent. Dental fluorosis (mottling) occurs in children when fluoride exceeds 1.5 mg/L.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-water-m10',
    topicId: 'water',
    question: 'An infant fed on formula prepared from tube-well water develops methaemoglobinaemia (blue-baby syndrome). The contaminant responsible is nitrate exceeding:',
    options: ['10 mg/L', '45 mg/L', '100 mg/L', '200 mg/L'],
    answer: 1,
    explanation:
      'Nitrate above 45 mg/L in infant feed water causes methaemoglobinaemia: gastric bacteria reduce nitrate to nitrite, which converts haemoglobin to methaemoglobin. The BIS acceptable limit for nitrate is 45 mg/L with no relaxation.',
    ref: 'K Park 27e',
  },

  // ---------------- AIR (9) ----------------
  {
    id: 'e2-air-m01',
    topicId: 'air',
    question: 'Which of the following is a SECONDARY air pollutant (formed in the atmosphere rather than emitted directly)?',
    options: [
      'Sulphur dioxide',
      'Carbon monoxide',
      'Ozone',
      'Suspended particulate matter',
    ],
    answer: 2,
    explanation:
      'Ozone, PAN and aldehydes are secondary pollutants formed photochemically in the atmosphere from NO2 and hydrocarbons; SO2, CO, particulates and lead are primary pollutants emitted directly at the source.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-air-m02',
    topicId: 'air',
    question: 'Carbon monoxide is highly toxic because its affinity for haemoglobin compared with oxygen is:',
    options: [
      '20 to 25 times greater',
      '200 to 250 times greater',
      '2000 to 2500 times greater',
      'Equal to that of oxygen',
    ],
    answer: 1,
    explanation:
      'CO has 200-250 times greater affinity for haemoglobin than oxygen, forming carboxyhaemoglobin and causing tissue hypoxia.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-air-m03',
    topicId: 'air',
    question: 'A 5-year-old child living next to a lead-battery recycling unit is at greatest risk of which health effect of lead?',
    options: [
      'Reduced IQ / neurotoxicity',
      'Methaemoglobinaemia',
      'Dental mottling',
      'Itai-itai disease',
    ],
    answer: 0,
    explanation:
      'Lead is a neurotoxin; children are the most vulnerable group and show reduced IQ and developmental deficits. Methaemoglobinaemia is due to nitrate and dental mottling to fluoride.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-air-m04',
    topicId: 'air',
    question: 'Radon gas, an important indoor air pollutant derived from soil, is associated with:',
    options: [
      'Mesothelioma',
      'Bladder cancer',
      'Byssinosis',
      'Lung cancer - second leading cause after smoking',
    ],
    answer: 3,
    explanation:
      'Radon is a natural radioactive gas produced by decay of uranium in soil and rock; after smoking it is the second leading cause of lung cancer.',
    ref: 'WHO',
  },
  {
    id: 'e2-air-m05',
    topicId: 'air',
    question: 'The London smog of 1952, which caused thousands of deaths, is described as:',
    options: [
      'Photochemical (oxidizing) smog',
      'Ozone and PAN smog',
      'Reducing type smog of SO2 and smoke',
      'Industrial smog of methyl isocyanate',
    ],
    answer: 2,
    explanation:
      'London smog was the reducing type, caused by SO2 plus smoke from coal combustion in cold foggy weather; the oxidizing photochemical smog (NO2 plus hydrocarbons plus UV sunlight forming ozone and PAN) is typical of Los Angeles.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-air-m06',
    topicId: 'air',
    question: 'The gas responsible for the Bhopal gas tragedy (1984) was:',
    options: ['Phosgene', 'Hydrogen sulphide', 'Methyl isocyanate', 'Sulphur dioxide'],
    answer: 2,
    explanation:
      'Methyl isocyanate (MIC) leaked from the Union Carbide plant at Bhopal in 1984, the worst industrial gas disaster in history.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-air-m07',
    topicId: 'air',
    question: 'As per the CPCB AQI scale, an AQI value of 401-500 is graded as:',
    options: ['Poor', 'Very poor', 'Hazardous', 'Severe'],
    answer: 3,
    explanation:
      'CPCB AQI bands: 0-50 Good, 51-100 Satisfactory, 101-200 Moderate, 201-300 Poor, 301-400 Very poor, 401-500 Severe; the index is computed from 8 pollutants (PM10, PM2.5, NO2, SO2, CO, O3, NH3, Pb).',
    ref: 'CPCB',
  },
  {
    id: 'e2-air-m08',
    topicId: 'air',
    question: 'As per the National Ambient Air Quality Standards (India, 2009), the 24-hour standard for PM2.5 is:',
    options: ['40 micrograms/m3', '60 micrograms/m3', '100 micrograms/m3', '15 micrograms/m3'],
    answer: 1,
    explanation:
      'NAAQS 2009 for PM2.5: annual 40 and 24-hour 60 micrograms/m3 (PM10: annual 60, 24-hour 100; SO2 annual 50; NO2 annual 40). The WHO 2021 guideline is stricter: PM2.5 annual 5, 24-hour 15 micrograms/m3.',
    ref: 'CPCB',
  },
  {
    id: 'e2-air-m09',
    topicId: 'air',
    question: 'The Air (Prevention and Control of Pollution) Act in India was enacted in:',
    options: ['1974', '1981', '1986', '1991'],
    answer: 1,
    explanation:
      'The Air (Prevention and Control of Pollution) Act was enacted in 1981; the Water Act was 1974 and the Environment (Protection) Act 1986.',
    ref: 'K Park 27e',
  },

  // ---------------- NOISE (7) ----------------
  {
    id: 'e2-noise-m01',
    topicId: 'noise',
    question: 'The A-weighted scale, dB(A), is preferred for measuring environmental noise because it:',
    options: [
      'Measures only very low frequency infrasound',
      'Approximates the frequency response of the human ear',
      'Measures sound pressure in absolute physical units',
      'Filters out all frequencies above 20,000 Hz',
    ],
    answer: 1,
    explanation:
      'Sound intensity is measured in decibels on a logarithmic scale, and the A-weighted network dB(A) approximates the response of the human ear.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-noise-m02',
    topicId: 'noise',
    question: 'The normal human ear can perceive sound in the frequency range of:',
    options: ['2 to 2,000 Hz', '200 to 2,000 Hz', '20 to 20,000 Hz', '20 to 200,000 Hz'],
    answer: 2,
    explanation:
      'The audible frequency range is 20-20,000 Hz; sounds below this range are infrasound and above it are ultrasound.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-noise-m03',
    topicId: 'noise',
    question: 'As per the Noise Pollution (Regulation and Control) Rules 2000, the night-time (10 pm to 6 am) noise limit in a residential area is:',
    options: ['55 dB(A)', '45 dB(A)', '40 dB(A)', '65 dB(A)'],
    answer: 1,
    explanation:
      'Residential zone limits are 55 dB(A) by day (6 am to 10 pm) and 45 dB(A) by night (10 pm to 6 am); 40 dB(A) is the night limit for silence zones.',
    ref: 'CPCB',
  },
  {
    id: 'e2-noise-m04',
    topicId: 'noise',
    question: 'Under the Noise Pollution (Regulation and Control) Rules 2000, a silence zone is an area within what distance of hospitals, educational institutions and courts?',
    options: ['50 metres', '100 metres', '200 metres', '500 metres'],
    answer: 1,
    explanation:
      'A silence zone comprises an area up to 100 metres around hospitals, educational institutions and courts; its limits are 50 dB(A) by day and 40 dB(A) by night.',
    ref: 'CPCB',
  },
  {
    id: 'e2-noise-m05',
    topicId: 'noise',
    question: 'As per the India Factories Rules, the maximum permissible occupational noise exposure for an 8-hour workday is:',
    options: ['85 dB(A)', '75 dB(A)', '120 dB(A)', '90 dB(A)'],
    answer: 3,
    explanation:
      'Occupational noise-induced hearing loss risk begins above 85 dB(A) for 8 hours/day, but the India Factories Rules permit a maximum of 90 dB(A) for 8 hours; every 3 dB rise halves the allowed exposure time.',
    ref: 'IAPSM 3e',
  },
  {
    id: 'e2-noise-m06',
    topicId: 'noise',
    question: 'Per the equal-energy principle of noise exposure, if the noise level increases by 3 dB(A), the permissible daily exposure time is:',
    options: ['Doubled', 'Unchanged', 'Halved', 'Reduced to one-tenth'],
    answer: 2,
    explanation:
      'Every 3 dB(A) increase in noise level halves the permissible exposure time (equal-energy principle); 8 hours at 90 dB(A) equals 4 hours at 93 dB(A).',
    ref: 'IAPSM 3e',
  },
  {
    id: 'e2-noise-m07',
    topicId: 'noise',
    question: 'The characteristic audiometric finding in occupational noise-induced hearing loss is:',
    options: [
      'Bilateral high-frequency loss with a notch at 4000 Hz',
      'Unilateral low-frequency conductive loss',
      'Flat loss across all frequencies',
      'Loss confined to frequencies below 500 Hz',
    ],
    answer: 0,
    explanation:
      'NIHL is permanent, bilateral and sensorineural, with a characteristic dip/notch at 4000 Hz; it is preceded by temporary threshold shift and tinnitus.',
    ref: 'K Park 27e',
  },

  // ---------------- RADIATION (8) ----------------
  {
    id: 'e2-radiation-m01',
    topicId: 'radiation',
    question: 'The unit used to express the EQUIVALENT (effective) dose of ionizing radiation is:',
    options: ['Becquerel (Bq)', 'Gray (Gy)', 'Sievert (Sv)', 'Rad'],
    answer: 2,
    explanation:
      'Becquerel measures activity (disintegrations per second); gray measures absorbed dose (1 Gy = 100 rad); sievert measures equivalent/effective dose (1 Sv = 100 rem).',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-radiation-m02',
    topicId: 'radiation',
    question: 'The radiation weighting factor of ALPHA particles is:',
    options: ['1', '5', '20', '100'],
    answer: 2,
    explanation:
      'Alpha particles carry a radiation weighting factor of 20 (beta particles, X-rays and gamma rays have a factor of 1), so internal contamination with alpha emitters is especially hazardous.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-radiation-m03',
    topicId: 'radiation',
    question: 'The largest source of NATURAL background radiation exposure to humans is:',
    options: ['Cosmic rays', 'Medical X-rays', 'Radioactive fallout', 'Radon'],
    answer: 3,
    explanation:
      'Natural background radiation averages approx. 2.4 mSv per year (UNSCEAR); radon is the largest natural contributor, while medical exposure is the largest man-made source.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-radiation-m04',
    topicId: 'radiation',
    question: 'The haematopoietic form of acute radiation syndrome occurs at whole-body doses of approximately:',
    options: ['0.1 to 1 Gy', '1 to 6 Gy', '6 to 20 Gy', 'More than 20 Gy'],
    answer: 1,
    explanation:
      'Acute radiation syndrome: haematopoietic form at approx. 1-6 Gy (bone marrow is most radiosensitive), gastrointestinal form at approx. 6-20 Gy, and neurovascular/cerebral form above 20 Gy.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-radiation-m05',
    topicId: 'radiation',
    question: 'The LD50/60 for acute whole-body radiation exposure WITHOUT medical treatment is approximately:',
    options: ['1 Gy', '4 Gy (3.5 to 4.5 Gy)', '8 Gy', '15 Gy'],
    answer: 1,
    explanation:
      'Without treatment the LD50/60 (dose lethal to 50 percent of exposed persons within 60 days) is approx. 3.5-4.5 Gy; supportive treatment improves survival.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-radiation-m06',
    topicId: 'radiation',
    question: 'Which of the following is a STOCHASTIC effect of ionizing radiation?',
    options: ['Skin erythema', 'Radiation cataract', 'Temporary sterility', 'Leukaemia'],
    answer: 3,
    explanation:
      'Stochastic effects (cancer such as leukaemia, and heritable/genetic effects) have no threshold and their probability increases with dose; erythema, cataract, sterility and acute radiation syndrome are deterministic (threshold) effects.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-radiation-m07',
    topicId: 'radiation',
    question: 'As per ICRP recommendations, the occupational effective dose limit averaged over 5 years is:',
    options: [
      '1 mSv per year',
      '20 mSv per year (maximum 50 mSv in any single year)',
      '50 mSv per year every year',
      '100 mSv per year',
    ],
    answer: 1,
    explanation:
      'ICRP limits: occupational 20 mSv/year averaged over 5 years with a maximum of 50 mSv in any single year; the limit for the public is 1 mSv/year.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-radiation-m08',
    topicId: 'radiation',
    question: 'An increase in which cancer among children was documented after the Chernobyl accident (1986)?',
    options: ['Thyroid cancer', 'Skin cancer', 'Mesothelioma', 'Osteosarcoma'],
    answer: 0,
    explanation:
      'Radioiodine released at Chernobyl (1986) caused a marked rise in thyroid cancer among children; radiation-induced leukaemia appears after a latent period of approx. 2-25 years and solid cancers after 10 or more years.',
    ref: 'WHO',
  },

  // ---------------- WASTE (8) ----------------
  {
    id: 'e2-waste-m01',
    topicId: 'waste',
    question: 'Blood-soaked cotton bandages and dressings from a hospital ward should be discarded in:',
    options: [
      'Yellow bag',
      'Red bin',
      'White translucent puncture-proof container',
      'Blue cardboard box',
    ],
    answer: 0,
    explanation:
      'YELLOW bags receive soiled waste (blood-soaked linen and bandages), anatomical waste, and expired/discarded and cytotoxic medicines; treatment is incineration or deep burial.',
    ref: 'BMW Rules 2016',
  },
  {
    id: 'e2-waste-m02',
    topicId: 'waste',
    question: 'Discarded IV sets, catheters and syringes without needles (contaminated recyclable plastics) are placed in:',
    options: [
      'Yellow bag',
      'Blue cardboard box',
      'Red bin',
      'White puncture-proof container',
    ],
    answer: 2,
    explanation:
      'RED bins hold contaminated recyclable plastics (IV tubing, catheters, gloves, syringes without needles); after autoclave/microwave/hydroclave treatment they are sent for recycling.',
    ref: 'BMW Rules 2016',
  },
  {
    id: 'e2-waste-m03',
    topicId: 'waste',
    question: 'Used needles, lancets and scalpel blades must be discarded in:',
    options: [
      'White translucent puncture-proof container',
      'Yellow bag',
      'Red bin',
      'Blue cardboard box',
    ],
    answer: 0,
    explanation:
      'SHARPS go into white translucent puncture-proof containers; after disinfection/autoclave/dry heat treatment the metal is sent for recovery. Contaminated sharps are never recycled.',
    ref: 'BMW Rules 2016',
  },
  {
    id: 'e2-waste-m04',
    topicId: 'waste',
    question: 'Discarded glass vials, ampoules and metallic body implants are disposed of in:',
    options: [
      'Red bin',
      'Blue cardboard box/container',
      'White puncture-proof container',
      'Yellow bag',
    ],
    answer: 1,
    explanation:
      'BLUE containers (cardboard boxes) receive glassware (vials, ampoules, broken/discarded glass) and metallic body implants; after sodium hypochlorite disinfection they are sent for recycling.',
    ref: 'BMW Rules 2016',
  },
  {
    id: 'e2-waste-m05',
    topicId: 'waste',
    question: 'The Bangalore method of composting is which type of composting?',
    options: [
      'Aerobic mechanical (Dano process)',
      'Open windrow aerobic composting',
      'Vermicomposting',
      'Anaerobic trench composting',
    ],
    answer: 3,
    explanation:
      'The Bangalore method is ANAEROBIC composting in trenches with alternate layers of refuse and night soil, kept closed for 4-6 months; the Dano process is mechanical aerobic composting.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-waste-m06',
    topicId: 'waste',
    question: 'The two principal environmental hazards of sanitary landfill are:',
    options: [
      'Leachate percolation and methane gas generation',
      'Dioxin emission and fly ash',
      'Sulphur dioxide and particulate emission',
      'Noise and vibration',
    ],
    answer: 0,
    explanation:
      'In sanitary landfill, refuse is compacted with a daily soil cover; the hazards are leachate polluting groundwater and methane generation. It is a low-cost method useful for land reclamation (unlike incineration, which emits gases and ash).',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-waste-m07',
    topicId: 'waste',
    question: 'In a twin-pit pour-flush latrine, once the first pit is full the correct practice is to:',
    options: [
      'Empty it immediately for use as manure',
      'Divert waste to the second pit and rest the filled pit for 1-2 years',
      'Seal the pit permanently with concrete',
      'Connect the filled pit to the nearest open drain',
    ],
    answer: 1,
    explanation:
      'The filled pit is rested for 1-2 years, during which the contents convert to safe composted humus that can be manually emptied; twin-pit pour-flush latrines are recommended by WHO for rural areas.',
    ref: 'WHO',
  },
  {
    id: 'e2-waste-m08',
    topicId: 'waste',
    question: 'The effluent of a septic tank is disposed of into:',
    options: [
      'The nearest open drain',
      'A compost trench',
      'A nearby river',
      'A soak pit',
    ],
    answer: 3,
    explanation:
      'The septic tank works by anaerobic digestion and needs desludging every 1-3 years; its effluent must pass into a soak pit for subsoil dispersion.',
    ref: 'K Park 27e',
  },
]

export const saqsEnvironment: Saq[] = [
  // ---------------- WATER (4) ----------------
  {
    id: 'e2-water-s01',
    topicId: 'water',
    question: 'Classify water-related diseases according to Bradley, giving one example of each type.',
    answerPoints: [
      'Waterborne (fecal-oral): infective agent ingested in water - cholera, typhoid, viral hepatitis A and E, polio, guinea-worm.',
      'Water-washed (water-scarce): due to lack of water for hygiene - trachoma, scabies, skin and eye sepsis.',
      'Water-based: agent needs an aquatic intermediate host - schistosomiasis (snail), fish tapeworm.',
      'Water-related insect vectors: insects breeding in water transmit disease - malaria, dengue, filariasis, Japanese encephalitis.',
    ],
    detailed: 'Guinea-worm is a waterborne disease transmitted through Cyclops (copepod) in untreated water.',
    ref: 'K Park 27e',
  },
  {
    id: 'e2-water-s02',
    topicId: 'water',
    question: 'Define chlorine demand and breakpoint chlorination of water.',
    answerPoints: [
      'Chlorine demand: the difference between chlorine applied and the free residual chlorine remaining after 30 minutes of contact.',
      'Breakpoint chlorination: the dose at which the chlorine demand is fully satisfied.',
      'Beyond the breakpoint, further added chlorine appears as free residual chlorine available for disinfection.',
      'Aim: free residual chlorine of 0.2-0.5 mg/L after 30 minutes; HOCl is the active agent.',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'e2-water-s03',
    topicId: 'water',
    question: 'State the per capita domestic water requirement recommended by WHO and the CPHEEO norm for Indian cities.',
    answerPoints: [
      'WHO basic water requirement: approx. 50 litres per person per day for drinking, cooking, hygiene and sanitation.',
      'CPHEEO norm for Indian cities with sewerage system: 135 litres per capita per day (LPCD).',
      'A higher allowance is given where water-carriage sewerage exists, to flush the wastes.',
    ],
    ref: 'IAPSM 3e',
  },
  {
    id: 'e2-water-s04',
    topicId: 'water',
    question: 'Name the mode of exposure and the characteristic skin manifestations of chronic arsenicosis.',
    answerPoints: [
      'Chronic ingestion of arsenic-contaminated groundwater, endemic in West Bengal, Bihar, UP, Assam and Jharkhand.',
      'Earliest skin change: diffuse melanosis.',
      'Later: palmoplantar keratosis; long-term complication is skin cancer.',
      'WHO guideline value for arsenic in drinking water is 0.01 mg/L.',
    ],
    ref: 'K Park 27e',
  },

  // ---------------- AIR (3) ----------------
  {
    id: 'e2-air-s01',
    topicId: 'air',
    question: 'Differentiate London smog from photochemical smog (any two points).',
    answerPoints: [
      'London smog is the reducing type: SO2 plus smoke from coal combustion (London, 1952; thousands of deaths).',
      'Photochemical smog is the oxidizing type: NO2 and hydrocarbons with UV sunlight form ozone and PAN (Los Angeles type).',
      'Reducing smog arises from primary pollutants; oxidizing smog arises from secondary pollutants formed in air.',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'e2-air-s02',
    topicId: 'air',
    question: 'What is the Air Quality Index (AQI)? List the pollutants included in the CPCB AQI.',
    answerPoints: [
      'AQI is a single index (0-500) with colour bands that reports daily air quality and the associated health risk.',
      'Eight pollutants: PM10, PM2.5, NO2, SO2, CO, O3, NH3 and Pb.',
      'Categories: Good (0-50), Satisfactory (51-100), Moderate (101-200), Poor (201-300), Very poor (301-400), Severe (401-500).',
    ],
    ref: 'CPCB',
  },
  {
    id: 'e2-air-s03',
    topicId: 'air',
    question: 'List the major sources of indoor air pollution in rural India and two control measures.',
    answerPoints: [
      'Biomass fuel (chulha) smoke: particulate matter, carbon monoxide, PAH and benzene - the major rural source.',
      'Environmental tobacco smoke (ETS / second-hand smoke) and radon gas from soil.',
      'Control: improved smokeless chulhas and switch to LPG / clean fuels.',
      'Control: adequate kitchen ventilation with chimney and a separate kitchen.',
    ],
    ref: 'K Park 27e',
  },

  // ---------------- NOISE (3) ----------------
  {
    id: 'e2-noise-s01',
    topicId: 'noise',
    question: 'Write the permissible day and night noise limits in dB(A) for the four zone types under the Noise Pollution (Regulation and Control) Rules 2000, India.',
    answerPoints: [
      'Industrial zone: 75 dB(A) day / 70 dB(A) night.',
      'Commercial zone: 65 dB(A) day / 55 dB(A) night.',
      'Residential zone: 55 dB(A) day / 45 dB(A) night.',
      'Silence zone (100 m around hospitals, educational institutions, courts): 50 dB(A) day / 40 dB(A) night.',
    ],
    detailed: 'Day is 6 am to 10 pm; night is 10 pm to 6 am.',
    ref: 'CPCB',
  },
  {
    id: 'e2-noise-s02',
    topicId: 'noise',
    question: 'What is noise-induced hearing loss (NIHL)? State its characteristic audiometric feature.',
    answerPoints: [
      'Permanent, bilateral sensorineural hearing loss caused by prolonged occupational noise exposure (risk above 85 dB(A) for 8 hours/day).',
      'Preceded by temporary threshold shift and tinnitus.',
      'Audiometry shows high-frequency loss with a characteristic notch/dip at 4000 Hz.',
    ],
    ref: 'IAPSM 3e',
  },
  {
    id: 'e2-noise-s03',
    topicId: 'noise',
    question: 'List control measures for noise pollution at the source, along the path, and at the receiver.',
    answerPoints: [
      'At source: silencers on machines and vehicles, regular maintenance, damping of vibrating parts.',
      'At path: noise barriers, green belts and trees, zoning and distance from the noise source.',
      'At receiver: ear plugs and ear muffs, worker education.',
      'Legislation: Noise Pollution (Regulation and Control) Rules 2000 with zone-wise day/night limits.',
    ],
    ref: 'K Park 27e',
  },

  // ---------------- RADIATION (3) ----------------
  {
    id: 'e2-radiation-s01',
    topicId: 'radiation',
    question: 'Differentiate deterministic and stochastic effects of ionizing radiation, with examples.',
    answerPoints: [
      'Deterministic: have a threshold dose; severity increases with dose - skin erythema, cataract, sterility, acute radiation syndrome.',
      'Stochastic: no threshold; probability of occurrence increases with dose, severity unchanged.',
      'Examples of stochastic effects: radiation-induced cancer (leukaemia) and genetic/heritable effects.',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'e2-radiation-s02',
    topicId: 'radiation',
    question: 'State the basic principles of protection against external ionizing radiation and the ICRP dose limits.',
    answerPoints: [
      'Basic principles: minimize time of exposure, maximize distance from the source, use shielding (lead aprons, barriers).',
      'Follow the ALARA principle: As Low As Reasonably Achievable.',
      'ICRP occupational limit: 20 mSv/year averaged over 5 years (maximum 50 mSv in any single year).',
      'Public limit: 1 mSv/year; extra fetal protection in pregnancy (approx. 1 mSv fetal dose; 10-day rule for pelvic X-rays).',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'e2-radiation-s03',
    topicId: 'radiation',
    question: 'Classify radiation into ionizing and non-ionizing types with examples, and state two health effects of UV radiation.',
    answerPoints: [
      'Ionizing: alpha and beta particles, X-rays, gamma rays, neutrons.',
      'Non-ionizing: UV, visible light, infrared, microwave, radiofrequency, laser, ultrasound.',
      'UV (mainly UVB): sunburn, skin cancer and cataract.',
      'Microwave: thermal damage and cataract; laser: retinal burns.',
    ],
    ref: 'K Park 27e',
  },

  // ---------------- WASTE (3) ----------------
  {
    id: 'e2-waste-s01',
    topicId: 'waste',
    question: 'List the colour coding of bins/bags under the Bio-Medical Waste Management Rules 2016 with one category of waste and one treatment option for each.',
    answerPoints: [
      'YELLOW: anatomical and soiled waste, expired and cytotoxic medicines - incineration or deep burial.',
      'RED: contaminated recyclable plastics (IV sets, catheters, syringes without needles) - autoclave/microwave, then recycling.',
      'WHITE translucent puncture-proof: sharps (needles, blades, lancets) - disinfection/autoclave, then metal recovery.',
      'BLUE cardboard box: glassware and metallic implants - sodium hypochlorite disinfection, then recycling.',
    ],
    detailed:
      'Segregate at source; untreated bio-medical waste must not be stored beyond 48 hours; chlorinated (PVC) plastic bags must not be incinerated; CBWTF = Common Bio-medical Waste Treatment Facility.',
    ref: 'BMW Rules 2016',
  },
  {
    id: 'e2-waste-s02',
    topicId: 'waste',
    question: 'Describe the Bangalore method of composting. How does it differ from the Dano process?',
    answerPoints: [
      'Bangalore method: anaerobic composting in trenches with alternate layers of refuse and night soil.',
      'Trenches/pits are kept closed for 4-6 months until decomposition is complete.',
      'Dano process: mechanical aerobic composting of refuse in rotating drums; faster than the Bangalore method.',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'e2-waste-s03',
    topicId: 'waste',
    question: 'Define an Open Defecation Free (ODF) area and name the national mission related to it.',
    answerPoints: [
      'ODF: no visible feces in the environment and every household member uses a safe toilet option.',
      'Achieved under the Swachh Bharat Mission, launched in 2014.',
      'ODF status interrupts fecal-oral transmission (cholera, typhoid, hepatitis A/E, polio) and reduces fly breeding.',
    ],
    ref: 'IAPSM 3e',
  },
]
