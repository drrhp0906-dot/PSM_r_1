import type { Topic } from './types'

export const notesEnvironment: Topic[] = [
  {
    id: 'water',
    chapterId: 'environment',
    title: 'Water',
    intro:
      'Safe water is the single most important environmental health intervention. Cover sources and requirements, water-related diseases (Bradley classification), quality standards, and purification methods — large scale and household.',
    sections: [
      {
        heading: 'Sources & Requirements',
        bullets: [
          'Sources: rainwater, surface water (rivers, lakes, ponds, sea) and ground water (shallow/deep wells, springs).',
          'WHO basic domestic requirement: approx. 50 litres per person per day (drinking, cooking, hygiene); CPHEEO norm for Indian cities with sewerage = 135 LPCD.',
          'Uses: domestic, public (fire-fighting, street washing), industrial, agricultural — only approx. 1% of global water is used for drinking.',
        ],
      },
      {
        heading: 'Bradley Classification of Water-related Diseases',
        table: {
          caption: 'Water-related disease classes (Bradley)',
          headers: ['Class', 'Mechanism', 'Examples'],
          rows: [
            ['Waterborne', 'Ingestion of contaminated water (fecal-oral)', 'Cholera, typhoid, viral hepatitis A/E, polio, giardiasis, amoebiasis, rotavirus, guinea-worm (via Cyclops)'],
            ['Water-washed (water-scarce)', 'Due to LACK of water for hygiene', 'Trachoma, scabies, skin and eye sepsis'],
            ['Water-based', 'Pathogen spends part of life in an aquatic host', 'Schistosomiasis (snail), fish tapeworm'],
            ['Water-related insect vector', 'Insects breeding in water transmit disease', 'Malaria, dengue, filariasis, JE, onchocerciasis'],
          ],
        },
        key: 'Guinea-worm (Dracunculus) is WATERBORNE (ingestion of Cyclops); schistosomiasis is WATER-BASED — a classic exam trap.',
      },
      {
        heading: 'Water Quality Standards',
        bullets: [
          'Bacteriological (WHO): E. coli / thermotolerant coliforms must be ABSENT in any 100 mL drinking-water sample.',
          'Indicator organism = E. coli (thermotolerant coliform) — signals fecal contamination.',
          'Tests: presumptive coliform count (MPN), confirmed test, completed test; membrane filtration; H2S strip test = simple field test.',
          'BIS IS 10500:2012 (acceptable / permissible in absence of alternate source): pH 6.5-8.5; TDS 500/2000 mg/L; total hardness 200/600; chloride 250/1000; fluoride 1.0/1.5; nitrate 45 (NO relaxation); arsenic 0.01/0.05; turbidity 1/5 NTU; residual chlorine 0.2 mg/L minimum.',
        ],
      },
      {
        heading: 'Chlorination',
        bullets: [
          'Active disinfecting agent = HOCl (hypochlorous acid) — penetrates the cell wall and oxidizes enzymes.',
          'Free residual chlorine: 0.2-0.5 mg/L after 30 minutes contact time (minimum 0.2 mg/L).',
          'Chlorine demand = chlorine applied minus free residual after 30 min contact.',
          'Breakpoint chlorination: the dose at which chlorine demand is fully satisfied — beyond it, free residual chlorine begins to appear in proportion to added chlorine.',
          'Disinfection by-products: trihalomethanes (e.g., chloroform) — potential carcinogens; minimized by pre-removal of organic matter.',
        ],
        key: 'Residual chlorine standard: 0.2-0.5 mg/L after 30 min contact — favourite MCQ.',
      },
      {
        heading: 'Water Purification — Large Scale',
        table: {
          caption: 'Slow sand filter vs rapid sand filter',
          headers: ['Feature', 'Slow sand filter', 'Rapid sand filter'],
          rows: [
            ['Rate of filtration', '0.1-0.4 m3/hour/m2', '3000-6000 L/hour/m2'],
            ['Pretreatment', 'Plain sedimentation', 'Coagulation + sedimentation'],
            ['Action', 'Biological (vital layer / schmutzdecke)', 'Mechanical / physical-chemical'],
            ['Bacteria removal', '98-99%', '80-90%'],
            ['Cleaning', 'Scraping top 2-3 cm layer', 'Backwashing with air/water'],
            ['Bacteria removal ranking', 'Superior', 'Lower'],
          ],
        },
        bullets: [
          'Storage alone: approx. 90% of organisms die within 5-6 days of plain storage.',
          'Sequence: storage -> filtration -> disinfection (chlorination).',
        ],
      },
      {
        heading: 'Household / Small-scale Purification',
        bullets: [
          'Boiling: most reliable — rolling boil kills all pathogens; disadvantages: no residual protection, fuel cost, taste change.',
          'Chemical: bleaching powder (approx. 33% available chlorine), chlorine tablets, high-test hypochlorite, iodine.',
          'Filtration: ceramic candle filters; solar disinfection (SODIS) — clear bottles exposed to sunlight for 6 hours.',
          'Potassium permanganate is NOT a reliable disinfectant for drinking water (popular misconception).',
        ],
      },
      {
        heading: 'Chemical Hazards in Water',
        bullets: [
          'Fluorosis: dental mottling when fluoride > 1.5 mg/L (children in enamel-forming years); skeletal fluorosis with long-term intake of 4-10 mg/L. Defluoridation: Nalgonda technique (alum + lime + bleaching powder), activated alumina.',
          'Methaemoglobinaemia (blue-baby syndrome): nitrate > 45 mg/L in feed water — gastric bacteria reduce nitrate to nitrite which oxidizes Hb. Infants < 3 months most susceptible.',
          'Arsenicosis: chronic arsenic via groundwater (West Bengal, Bihar, UP, Assam, Jharkhand); skin changes: rain-drop melanosis -> palmoplantar keratosis -> skin cancer. WHO guideline 0.01 mg/L.',
        ],
      },
    ],
    highYield: [
      'E. coli must be absent in any 100 mL sample (WHO)',
      'Free residual chlorine 0.2-0.5 mg/L after 30 min',
      'Slow filter: schmutzdecke, 98-99% bacteria removal; rapid: backwash, 80-90%',
      'Nitrate > 45 mg/L -> blue-baby syndrome',
      'Nalgonda technique = defluoridation (alum + lime + bleaching powder)',
    ],
    ref: 'K Park 27e, Ch. 14 (Water); BIS IS 10500:2012; WHO',
  },
  {
    id: 'air',
    chapterId: 'environment',
    title: 'Air',
    intro:
      'Air pollution is a leading environmental risk to health — outdoor (industrial, vehicular) and indoor (biomass smoke, radon). Learn pollutant classes, standards (NAAQS/WHO), AQI and health effects.',
    sections: [
      {
        heading: 'Composition of Clean Air',
        bullets: [
          'Nitrogen 78.09%, oxygen 20.95%, argon 0.93%, CO2 0.03% (now approx. 0.04% and rising).',
          'CO2 is the physiologically most relevant "trace" gas — drives ventilation.',
        ],
      },
      {
        heading: 'Pollutants: Primary vs Secondary',
        bullets: [
          'Primary pollutants: emitted directly into the atmosphere — SO2, NOx, CO, particulate matter (PM10, PM2.5), lead, hydrocarbons.',
          'Secondary pollutants: formed IN the atmosphere by photochemical reactions — ozone, PAN (peroxyacetyl nitrate), aldehydes.',
        ],
        key: 'Photochemical smog (oxidizing; Los Angeles type) = NO2 + hydrocarbons + UV sunlight -> ozone + PAN. London smog 1952 (reducing type) = SO2 + smoke; caused thousands of excess deaths.',
      },
      {
        heading: 'Health Effects',
        bullets: [
          'Respiratory: COPD, asthma exacerbations, chronic bronchitis, lung cancer.',
          'Cardiovascular: ischaemic heart disease, stroke (especially with PM2.5).',
          'CO: affinity for haemoglobin 200-250 times that of oxygen -> carboxyhaemoglobin -> tissue hypoxia.',
          'Lead: neurotoxicity, reduced IQ in children, anaemia.',
          'Radon: radioactive gas from soil (uranium decay) — second leading cause of lung cancer after smoking.',
          'PM2.5 penetrates to alveoli and enters circulation — most health-damaging fraction.',
          'Bhopal gas tragedy (1984): methyl isocyanate (MIC) — industrial disaster with thousands of deaths.',
        ],
      },
      {
        heading: 'Standards & AQI',
        bullets: [
          'NAAQS India (2009): PM2.5 annual 40 / 24-hour 60 micrograms/m3; PM10 annual 60 / 24-hour 100; SO2 annual 50; NO2 annual 40.',
          'WHO 2021 Air Quality Guidelines: PM2.5 annual 5 / 24-hour 15 micrograms/m3; PM10 annual 15 / 24-hour 45 (much stricter than Indian limits).',
          'AQI (CPCB) uses 8 pollutants — PM10, PM2.5, NO2, SO2, CO, O3, NH3, Pb — and 6 categories:',
        ],
        table: {
          caption: 'AQI categories (CPCB India)',
          headers: ['AQI', 'Category'],
          rows: [
            ['0-50', 'Good'],
            ['51-100', 'Satisfactory'],
            ['101-200', 'Moderate'],
            ['201-300', 'Poor'],
            ['301-400', 'Very poor'],
            ['401-500', 'Severe'],
          ],
        },
      },
      {
        heading: 'Indoor Air Pollution & Control',
        bullets: [
          'Rural India: biomass/chulha smoke (particulates, CO, PAH, benzene) — especially harms women and children in poorly ventilated kitchens.',
          'Other indoor agents: environmental tobacco smoke (ETS), radon, formaldehyde, asbestos.',
          'Control: improved chulhas, LPG/clean fuels, kitchen ventilation; outdoor: Air (Prevention and Control of Pollution) Act 1981, clean fuels, BS-VI vehicles, scrubbers/electrostatic precipitators, stack height, zoning.',
        ],
      },
    ],
    highYield: [
      'CO binds Hb 200-250x stronger than oxygen',
      'Secondary pollutants: ozone, PAN (photochemical smog)',
      'Radon = 2nd leading cause of lung cancer',
      'NAAQS PM2.5: annual 40, 24h 60 micrograms/m3',
      'AQI Severe = 401-500',
    ],
    ref: 'K Park 27e, Ch. 15 (Air); CPCB NAAQS 2009; WHO AQG 2021',
  },
  {
    id: 'noise',
    chapterId: 'environment',
    title: 'Noise',
    intro:
      'Noise is "unwanted sound" — a modern environmental hazard causing hearing loss and systemic (non-auditory) effects. Learn measurement, Indian zone limits, and control.',
    sections: [
      {
        heading: 'Basic Physics & Measurement',
        bullets: [
          'Sound intensity measured in decibels (dB) — a logarithmic scale; A-weighted dB(A) approximates the response of the human ear.',
          'Audible frequency range: 20-20,000 Hz.',
          'Reference points: whisper 30 dB, normal conversation approx. 60 dB, pain threshold approx. 120-130 dB.',
        ],
      },
      {
        heading: 'Indian Standards — Noise Pollution Rules 2000',
        table: {
          caption: 'Ambient noise limits in dB(A), day (6 am-10 pm) / night (10 pm-6 am)',
          headers: ['Zone', 'Day', 'Night'],
          rows: [
            ['Industrial', '75', '70'],
            ['Commercial', '65', '55'],
            ['Residential', '55', '45'],
            ['Silence zone', '50', '40'],
          ],
        },
        key: 'Silence zone = area within 100 m of hospitals, educational institutions and courts. Night = 10 pm to 6 am.',
      },
      {
        heading: 'Health Effects',
        bullets: [
          'Auditory — occupational NIHL: risk above 85 dB(A) for 8 hours/day (India Factories Rules: 90 dB(A) for 8 h); every 3 dB increase HALVES the permissible exposure time.',
          'Sequence: temporary threshold shift and tinnitus -> permanent threshold shift; classic audiometric NOTCH at 4000 Hz; bilateral, high-frequency sensorineural loss.',
          'Acoustic trauma: sudden permanent loss from explosion/impulse noise.',
          'Non-auditory: sleep disturbance, annoyance, hypertension and cardiovascular risk, impaired concentration and school performance in children, mental health effects.',
        ],
      },
      {
        heading: 'Control of Noise',
        bullets: [
          'At source: silencers, damping, regular machine maintenance, process substitution.',
          'At path: barriers, green belts, zoning (separate industrial/residential), distance.',
          'At receiver: ear plugs and ear muffs (personal protection), education, legislation enforcement.',
        ],
      },
    ],
    highYield: [
      'Residential 55/45; silence zone 50/40 dB(A)',
      'NIHL risk > 85 dB(A) for 8 hours (Factories Rules: 90)',
      'Audiometric notch at 4000 Hz = NIHL',
      '+3 dB halves permissible exposure time',
      'Audible range 20-20,000 Hz',
    ],
    ref: 'K Park 27e, Ch. 16 (Noise); Noise Pollution Rules 2000',
  },
  {
    id: 'radiation',
    chapterId: 'environment',
    title: 'Radiation',
    intro:
      'Radiation injuries range from acute radiation syndrome to late stochastic cancers. Learn types, units, dose limits and protection principles — high-yield for both theory and MCQs.',
    sections: [
      {
        heading: 'Types of Radiation',
        bullets: [
          'Ionizing: particulate (alpha, beta, neutrons) and electromagnetic (X-rays, gamma rays) — enough energy to ionize atoms.',
          'Non-ionizing: ultraviolet, visible light, infrared, microwave, radiofrequency, laser, ultrasound.',
          'Alpha particles: heavily ionizing but minimally penetrating (dangerous mainly when inhaled/ingested); beta: moderate; gamma/X: deeply penetrating.',
        ],
      },
      {
        heading: 'Units of Measurement',
        table: {
          caption: 'Radiation units (new vs old)',
          headers: ['Quantity', 'New unit', 'Old unit', 'Conversion'],
          rows: [
            ['Activity (disintegrations/sec)', 'becquerel (Bq)', 'curie (Ci)', '1 Ci = 3.7 x 10^10 Bq'],
            ['Absorbed dose', 'gray (Gy)', 'rad', '1 Gy = 100 rad'],
            ['Equivalent/effective dose', 'sievert (Sv)', 'rem', '1 Sv = 100 rem'],
          ],
        },
        key: 'Radiation weighting factor: alpha = 20; background radiation approx. 2.4 mSv/year (UNSCEAR); radon = largest NATURAL source, medical exposure = largest MAN-MADE source.',
      },
      {
        heading: 'Health Effects',
        bullets: [
          'Acute radiation syndrome (whole-body): haematopoietic form (approx. 1-6 Gy), gastrointestinal form (approx. 6-20 Gy), neurovascular/cerebral form (> 20 Gy).',
          'LD50/60 (dose killing 50% within 60 days) WITHOUT treatment = approx. 3.5-4.5 Gy (approx. 4 Gy); with supportive care approx. 6-7 Gy.',
          'Deterministic (tissue) effects: threshold doses; severity rises with dose — skin erythema, cataract, sterility, hair loss, ARS.',
          'Stochastic effects: no threshold; probability rises with dose — cancer (leukaemia latent period approx. 2-25 years; solid cancers 10+ years) and heritable/genetic effects.',
          'Chernobyl (1986): marked rise in thyroid cancer in children from radioiodine (I-131) contamination of milk. Hiroshima-Nagasaki Life Span Study = main cancer evidence base.',
        ],
        key: 'Deterministic = threshold, severity increases (cataract, erythema, ARS). Stochastic = NO threshold, only probability increases (cancer, genetic effects).',
      },
      {
        heading: 'Protection Principles',
        bullets: [
          'Three pillars: TIME (minimize exposure time), DISTANCE (inverse square law — double distance = quarter dose), SHIELDING (lead, concrete).',
          'ALARA: As Low As Reasonably Achievable.',
          'ICRP dose limits: occupational = 20 mSv/year averaged over 5 years (max 50 mSv in any single year); public = 1 mSv/year.',
          'Pregnancy: fetal dose limit approx. 1 mSv; "10-day rule" — elective abdominal/pelvic X-ray of reproductive-age women ideally within 10 days of onset of menstruation.',
        ],
      },
      {
        heading: 'Non-ionizing Radiation Effects',
        bullets: [
          'UV: sunburn, photoaging, skin cancers, cataract (UVB is most relevant; UVC most lethal but filtered by the ozone layer).',
          'Microwave: thermal effects, cataract; infrared: heat, cataract ("glassblower\'s cataract"); laser: retinal burns.',
        ],
      },
    ],
    highYield: [
      'Gy = absorbed dose; Sv = equivalent dose; Bq = activity',
      'Occupational limit 20 mSv/year (5-year average); public 1 mSv/year',
      'Haematopoietic 1-6 Gy; GI 6-20 Gy; cerebral > 20 Gy',
      'Radon = largest natural source of background radiation',
      'Protection: time, distance, shielding + ALARA',
    ],
    ref: 'K Park 27e, Ch. 17 (Radiation); ICRP',
  },
  {
    id: 'waste',
    chapterId: 'environment',
    title: 'Disposal of Waste',
    intro:
      'Covers community solid waste disposal, hospital bio-medical waste (BMW Rules 2016 colour coding — a guaranteed exam question) and excreta disposal methods.',
    sections: [
      {
        heading: 'Solid Waste — Types & Community Disposal',
        bullets: [
          'Refuse types: garbage (kitchen, putrescible), rubbish (combustible + non-combustible), ashes, night soil.',
          'Hazards: fly and vector breeding, water/soil pollution, odour, injuries, fires.',
          'Sanitary landfill: low-cost, reclaims low-lying land; requirements — daily cover, no vector breeding, no nuisance; problems: leachate contamination and methane generation.',
          'Incineration: high-temperature combustion — best for hospital/infectious waste.',
          'Composting: Bangalore method = ANAEROBIC composting (trench with alternate layers of refuse and night soil, closed for 4-6 months); mechanical/aerobic composting = Dano process; product = compost/manure.',
          'Other: controlled tipping, pulverization, burial, hog feeding.',
        ],
        key: 'Bangalore method = anaerobic composting; Dano process = mechanical aerobic composting.',
      },
      {
        heading: 'Bio-medical Waste — BMW Rules 2016 Colour Coding',
        table: {
          caption: 'Colour coding (Bio-Medical Waste Management Rules 2016)',
          headers: ['Colour', 'Contents', 'Treatment'],
          rows: [
            ['YELLOW', 'Human/animal anatomical waste, soiled waste (blood-soaked), expired and cytotoxic medicines, chemical solid waste, discarded linen, microbiology waste', 'Incineration / deep burial / plasma pyrolysis'],
            ['RED', 'Contaminated recyclable plastics — IV sets, tubing, catheters, syringes WITHOUT needles, gloves', 'Autoclave / microwave / hydroclave, then recycling'],
            ['WHITE (translucent, puncture-proof)', 'SHARPS — needles, blades, scalpels, lancets', 'Disinfection / autoclave / dry heat, then metal recovery'],
            ['BLUE (cardboard box)', 'Glassware — vials, ampoules, broken glass; metallic body implants', 'Sodium hypochlorite disinfection, then recycling'],
          ],
        },
        key: 'Segregation AT SOURCE; untreated BMW not stored beyond 48 hours; chlorinated (PVC) plastic bags must NOT be incinerated; CBWTF = Common Bio-medical Waste Treatment Facility.',
      },
      {
        heading: 'Excreta Disposal',
        bullets: [
          'Systems: conservancy (dry/manual removal of night soil — obsolete) vs water-carriage (sewerage).',
          'Unsewered/rural methods: bore-hole latrine, dug-well latrine, service latrine, pour-flush WATER-SEAL latrines (single or twin pit), septic tank, aqua privy, Sulabh Shauchalaya.',
          'Twin-pit pour-flush latrine (WHO-recommended): two pits used alternately; filled pit rested approx. 1-2 years -> safely composted humus that can be manually emptied — self-sustaining and cheap.',
          'Septic tank: anaerobic digestion; needs desludging every 1-3 years; effluent disposed into a SOAK PIT.',
          'Poor excreta disposal -> soil/water pollution, food contamination, fly breeding -> fecal-oral diseases (typhoid, cholera, hepatitis A/E, polio) and hookworm.',
          'Swachh Bharat Mission (2014); ODF (Open Defecation Free) = all households use safe toilets with no visible feces in the environment.',
        ],
      },
    ],
    highYield: [
      'Yellow -> incineration; Red -> autoclave + recycling; White -> sharps; Blue -> glassware',
      'Untreated BMW storage limit: 48 hours',
      'Bangalore method = anaerobic; Dano = aerobic mechanical',
      'Sanitary landfill hazards: leachate + methane',
      'Twin pit: rest 1-2 years, then safe manual emptying',
    ],
    ref: 'K Park 27e, Ch. 18-19; BMW Management Rules 2016; IAPSM 3e',
  },
]
