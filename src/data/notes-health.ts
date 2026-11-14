import type { Topic } from './types'

export const notesHealth: Topic[] = [
  {
    id: 'health-wellbeing',
    chapterId: 'health-disease',
    title: 'Concept of Health & Well-being',
    intro:
      'Health is a positive, multidimensional concept — it emphasizes social and personal resources, not just physical capacity. This topic covers the WHO definition, the evolution of health concepts, well-being, and positive health.',
    sections: [
      {
        heading: 'WHO Definition of Health (1948)',
        bullets: [
          '"Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity." (Preamble to the WHO Constitution, 1948)',
          'Strengths: idealistic, holistic — it recognized health as beyond medicine, a fundamental human right.',
          'Criticisms: the word "complete" makes it utopian/unattainable; it ignores the spiritual dimension; too vague and not operational.',
          'Operational definition (WHO): "a condition or quality of the human organism expressing the adequate functioning of the organism in given conditions, genetic or environmental." — adequate functioning under one\'s genetic load and environmental pressures.',
        ],
        key: 'Exam pearl: The WHO 1948 definition covers physical, mental and social well-being — the SPIRITUAL dimension is NOT mentioned.',
      },
      {
        heading: 'Changing Concepts of Health',
        bullets: [
          'Biomedical concept: health = "absence of disease"; rooted in the germ theory of Pasteur and Koch; criticized for mind-body dualism and medicalization of health.',
          'Ecological concept: health is a dynamic equilibrium between man and his environment; disease = maladjustment of the human organism to the environment.',
          'Psychosocial concept: health is not only a biological phenomenon — social, psychological, cultural, economic and political factors are fundamental determinants.',
          'Holistic concept: synthesis of all the above; health is multidimensional and influenced by all sectors (agriculture, education, housing, industry), not the health sector alone.',
        ],
      },
      {
        heading: 'Well-being: Standard of Living vs Quality of Life',
        bullets: [
          'Well-being = a subjective perception of vitality, feeling well; it has objective components (standard of living, quality of life).',
          'Standard of living: the level of income and wealth a person enjoys (so-called "efficiency standard").',
          'Level of living: measurable components — housing, nutrition, education, health, recreation, social security.',
          'Quality of life (WHO 1993): "an individual\'s perception of their position in life in the context of the culture and value systems in which they live, and in relation to their goals, expectations, standards and concerns."',
          'Gross National Happiness (GNH): Bhutan measures development by GNH instead of GDP.',
        ],
      },
      {
        heading: 'Positive Health & the New Philosophy of Health',
        bullets: [
          'Positive health: "perfect functioning of body and mind" — emphasizes social and personal capacity, physical fitness and the motivation towards wellness. It is an ideal state, rarely attained in practice.',
          'New philosophy of health: health is a fundamental human right; the essence of productive life; an intersectoral concern; a worldwide social goal; an investment (not expenditure); part of development; central to quality of life.',
        ],
        key: 'Positive health = perfect functioning of body and mind (ideal, rarely attained).',
      },
    ],
    highYield: [
      'WHO definition — 1948; no mention of spiritual dimension',
      'Operational definition = adequate functioning under genetic + environmental load',
      'Ecological concept = dynamic equilibrium of man and environment',
      'Positive health = perfect functioning of body and mind',
      'GNH = Bhutan',
    ],
    ref: 'K Park 27e, Ch. 2 (Concept of Health and Disease); IAPSM 3e',
  },
  {
    id: 'dimensions',
    chapterId: 'health-disease',
    title: 'Dimensions of Health',
    intro:
      'Health is multidimensional. K Park describes 6 classic dimensions — physical, mental, social, spiritual, emotional and vocational — plus several newer ones.',
    sections: [
      {
        heading: 'The Six Classic Dimensions',
        bullets: [
          'Physical: the easiest dimension to conceive — structural and functional integrity of the body; ability to perform routine tasks without undue fatigue.',
          'Mental (WHO): "a state of well-being in which the individual realizes his/her own abilities, can cope with the normal stresses of life, can work productively and fruitfully, and is able to make a contribution to his/her community."',
          'Social: quantity and quality of interpersonal relationships; social cohesion and harmony in society.',
          'Spiritual: integrity, principles, ethics, purpose in life, commitment to a higher being — added relatively recently.',
          'Emotional: the ability to feel and express emotions (love, hate, fear, joy); distinct from mental (cognitive) health — "mental = knowing, emotional = feeling".',
          'Vocational: work as a source of satisfaction and achievement; occupation balanced with other dimensions of life.',
        ],
        key: 'Classic 6 dimensions: Physical, Mental, Social, Spiritual, Emotional, Vocational. Others: philosophical, cultural, socio-economic, environmental, educational, nutritional, curative, preventive.',
      },
      {
        heading: 'Newer / Additional Dimensions',
        bullets: [
          'Philosophical dimension: acknowledges man\'s capacity for self-knowledge and self-realization.',
          'Cultural, socio-economic, environmental, educational, nutritional, curative and preventive dimensions are increasingly recognized.',
        ],
      },
    ],
    highYield: [
      'Mental health = realize abilities + cope with stress + work productively + contribute to community',
      'Physical dimension = easiest to assess',
      'Emotional (feelings) is NOT the same as mental (cognition)',
      'Spiritual = integrity, principles, purpose in life',
    ],
    ref: 'K Park 27e, Ch. 2; IAPSM 3e',
  },
  {
    id: 'spectrum',
    chapterId: 'health-disease',
    title: 'Spectrum of Health',
    intro:
      'Health is dynamic, not static — everyone lies somewhere on a continuum between optimum health and death. This moving spectrum has important implications for prevention.',
    sections: [
      {
        heading: 'Health-Illness Continuum',
        bullets: [
          'Spectrum of health: Positive health -> Better health -> Freedom from sickness -> Unrecognized sickness -> Mild sickness -> Severe sickness -> Death.',
          'Health is a moving, dynamic state — an individual may shift position day to day.',
          '"Freedom from disease is not the same as health" — subclinical disease states exist below the surface.',
        ],
        key: 'The two ends of the spectrum: positive health (one end) and death (the other end).',
      },
      {
        heading: "Dunn's High-Level Wellness Grid (1961)",
        bullets: [
          'Halbert L. Dunn described "high-level wellness" using two axes: a HEALTH axis (peak death to peak wellness) and an ENVIRONMENT axis (very unfavorable to very favorable).',
          'Grid quadrants: High-level wellness (peak health + favorable environment), Emergent high-level wellness, Protected poor health (favorable environment but poor health), Poor health.',
          'High-level wellness applies to the individual, family and community — it is an approach, not just a state.',
        ],
      },
      {
        heading: 'Why the Spectrum Matters',
        bullets: [
          'Health care must shift focus from cure of overt disease to promotion of positive health.',
          'Most people are neither fully healthy nor diseased — they occupy the middle of the spectrum.',
        ],
      },
    ],
    highYield: [
      "Dunn's grid (1961): health axis x environmental axis",
      'High-level wellness = peak well-being in a favorable environment',
      'Health is dynamic — spectrum runs from positive health to death',
    ],
    ref: 'K Park 27e, Ch. 2; IAPSM 3e',
  },
  {
    id: 'determinants',
    chapterId: 'health-disease',
    title: 'Determinants of Health',
    intro:
      'Health is determined by much more than health care. K Park lists biology, environment, lifestyle, socio-economic conditions, health services, ageing, gender — plus peace, equity and social justice.',
    sections: [
      {
        heading: 'Major Determinants',
        bullets: [
          'Heredity / biology: genetic endowment — health cannot be perfect where genes are defective (e.g., G6PD deficiency, sickle cell anaemia, thalassaemia, haemophilia); tools = genetic counselling, screening, prenatal diagnosis.',
          'Environment: internal (each cell/organ) and external (physical, biological, psychosocial) — a major determinant of health.',
          'Lifestyle: habits and behavioural practices — smoking, alcohol, drugs, diet, physical inactivity; the leading cause of illness in developed countries ("diseases of human origin").',
          'Socio-economic conditions: economic status (GNP, per capita income), education, occupation, political system (e.g., the 1917 Soviet revolution reorganized health services), housing, water supply and sanitation.',
          'Health services: organized care — immunization, PHC, maternal-child health services; coverage determines community health outcomes.',
          'Ageing of population: rising elderly population shifts disease burden to chronic, non-communicable diseases and creates geriatric care needs.',
          'Gender: differential exposure, vulnerability and health-seeking; India sex ratio (Census 2011) = 943 women per 1000 men.',
          'Other factors: peace, human rights, equity, social justice, food and nutrition, education.',
        ],
        key: 'Lifestyle is the leading cause of illness in developed countries; ageing shifts the burden towards chronic diseases.',
      },
    ],
    highYield: [
      'Lifestyle diseases = "diseases of human origin"',
      'Hereditary examples: G6PD, sickle cell, thalassaemia, haemophilia',
      'Sex ratio India 2011 = 943/1000',
      'Political system shapes health services (USSR 1917 example)',
    ],
    ref: 'K Park 27e, Ch. 2; IAPSM 3e',
  },
  {
    id: 'indicators',
    chapterId: 'health-disease',
    title: 'Indicators of Health',
    intro:
      'Since health cannot be measured directly, indicators are used to measure health status, compare communities, and evaluate health programmes. Learn the classification and the classic "sensitive indicators".',
    sections: [
      {
        heading: 'Classification of Indicators',
        bullets: [
          'Mortality: crude death rate, infant mortality rate, neonatal mortality rate, under-5 mortality rate, maternal mortality ratio, proportional mortality rate, case fatality rate.',
          'Morbidity: incidence and prevalence rates, notification rates, attendance at OPD, admission/discharge rates, duration of hospital stay, sickness absence.',
          'Disability: DALY, HALE, QALY, disability-free life expectancy, disability rates.',
          'Nutritional status: anthropometric (weight-for-age, height-for-age, BMI, mid-upper arm circumference), clinical surveys.',
          'Health care delivery: doctor-population ratio, nurse-population ratio, population per PHC/bed.',
          'Utilization: % immunized children, % institutional deliveries, % contraceptive users, bed occupancy rate.',
          'Social and mental: suicide and homicide rates, crime, domestic violence, substance abuse, road accidents.',
          'Environmental: % population with safe water, sanitation coverage, air/water pollution indices.',
          'Socio-economic: GNP per capita, per capita income, literacy rate, housing, income distribution.',
          'Health policy: NHP targets, SDG targets, allocation of budget to health.',
          'Indicators of quality of life and social indicators (composite indices).',
        ],
        key: 'DALY = YLL (years of life lost) + YLD (years lived with disability) — one DALY = one lost healthy life-year.',
      },
      {
        heading: 'Key Indian Values (K Park 27e)',
        table: {
          caption: 'Mortality indicators — India',
          headers: ['Indicator', 'Value', 'Source'],
          rows: [
            ['IMR', '28 per 1000 live births', 'SRS 2020'],
            ['Neonatal mortality rate', '20 per 1000 live births', 'SRS 2020'],
            ['Under-5 mortality rate', '32 per 1000 live births', 'SRS 2020'],
            ['Maternal mortality ratio', '97 per 100,000 live births', 'SRS 2018-20 (latest SRS 2019-21: 93)'],
            ['Expectation of life at birth', 'approx. 70 years', 'SRS'],
          ],
        },
      },
      {
        heading: 'Composite Indices',
        bullets: [
          'PQLI (Physical Quality of Life Index): composite of infant mortality rate, life expectancy at age 1, and basic literacy rate (scaled 0-100).',
          'HDI (Human Development Index, UNDP): life expectancy at birth + education (mean and expected years of schooling) + decent standard of living (GNI per capita PPP); ranges 0-1.',
          'SDG 3: "Ensure healthy lives and promote well-being for all at all ages" — 9 health targets + 4 means of implementation (3.a-3.d) = 13 targets, including MMR < 70 per 100,000 and universal health coverage by 2030.',
        ],
        key: 'IMR = most sensitive indicator of a community\'s health status and development. MMR = sensitive indicator of the quality of MCH services. U5MR = sensitive indicator of child health and social development (UNICEF).',
      },
    ],
    highYield: [
      'DALY = YLL + YLD',
      'PQLI = IMR + life expectancy at age 1 + literacy',
      'HDI = health + education + GNI per capita (PPP)',
      'IMR 28/1000 (SRS 2020); MMR 97/100,000 (SRS 2018-20)',
      'SDG 3 = 9 + 4 = 13 targets',
    ],
    ref: 'K Park 27e, Ch. 2; SRS/UNDP reports',
  },
  {
    id: 'causation',
    chapterId: 'health-disease',
    title: 'Concept of Disease & Causation',
    intro:
      'From supernatural theories to the germ theory to today\'s multifactorial models — understanding causation determines how we prevent and control disease.',
    sections: [
      {
        heading: 'Disease, Illness, Sickness',
        bullets: [
          'Disease: objective, physiological/psychological dysfunction — a medical diagnosis ("what the doctor sees").',
          'Illness: subjective feeling of not being well ("what the patient feels").',
          'Sickness: the external/social role of the diseased person ("what society recognizes").',
          'WHO glossary: disease = "any deviation from physiological or psychological homeostasis".',
        ],
      },
      {
        heading: 'Theories of Disease Causation',
        bullets: [
          'Supernatural theory: disease as divine punishment / evil spirits — the oldest theory.',
          'Miasma theory: disease caused by bad air ("miasma") from decomposing organic matter — led to sanitation movements.',
          'Germ theory (Pasteur, Koch): one microbe = one disease; revolutionized medicine but failed to explain chronic diseases and why only some exposed people fall ill.',
          'Multifactorial causation (Pettenkofer and modern epidemiology): diseases like CHD, cancer, diabetes arise from multiple interacting factors.',
        ],
      },
      {
        heading: 'Epidemiological Triad and Beyond',
        bullets: [
          'Triad: AGENT + HOST + ENVIRONMENT (vector often added for vector-borne diseases).',
          'Agent types: biological (viruses, bacteria, parasites), nutrient (deficiency/excess), physical (heat, cold, radiation), chemical (endogenous e.g. uremia; exogenous e.g. allergens, tobacco), mechanical (friction, trauma), social (poverty, stress, alcoholism).',
          'Host factors: demographic (age, sex), biological (genetics, immunity, behaviour), social and economic characteristics.',
          'Environment: physical (geology, climate), biological (vectors, reservoirs), psychosocial (customs, culture).',
          'Web of causation (MacMahon and Pugh): all risk factors interlinked like a web; no single cause; applied to chronic diseases e.g. CHD.',
          "Rothman's causal pies: a SUFFICIENT cause = a combination of component causes; a NECESSARY cause must always be present (M. tuberculosis is necessary, but NOT sufficient, for TB).",
          'Wheel model (Mausner and Kramer): genetic core at the hub, surrounded by spokes of the physical, biological and social environment.',
        ],
        key: "Iceberg phenomenon: clinical (apparent) cases are the TIP; subclinical, inapparent and carrier states lie below the waterline — e.g., influenza, hepatitis A, TB, poliomyelitis (approx. 1 paralytic case per 1000 infections in children), hypertension, diabetes, mental illness.",
      },
      {
        heading: 'Why the Iceberg Matters',
        bullets: [
          'Control measures must target subclinical cases and carriers, not just clinical cases.',
          'Subclinical disease can only be detected by sero-epidemiology / screening — clinical practice misses it.',
          'The iceberg explains continued transmission despite apparent "control" of cases (e.g., poliomyelitis, COVID-19).',
        ],
      },
    ],
    highYield: [
      'Endogenous chemical agent example: uremia; exogenous: allergens',
      'Web of causation = MacMahon and Pugh',
      'M. tuberculosis = necessary but not sufficient cause (Rothman)',
      'Polio iceberg ratio approx. 1 paralytic : 1000 inapparent infections',
      'Disease (objective) vs illness (subjective) vs sickness (social role)',
    ],
    ref: 'K Park 27e, Ch. 2; IAPSM 3e',
  },
  {
    id: 'natural-history',
    chapterId: 'health-disease',
    title: 'Natural History of Disease',
    intro:
      'The natural history of disease is the course a disease takes in the absence of intervention — from the moment of exposure to the outcome. It has two phases, each with matching prevention levels.',
    sections: [
      {
        heading: 'Two Phases',
        bullets: [
          'Pre-pathogenesis phase: BEFORE the disease onset — interaction of agent, host and environment creates risk factors; the person is "healthy" but exposed.',
          'Pathogenesis phase: begins with entry of the disease agent into the susceptible host — runs from subclinical disease -> early clinical disease -> late clinical disease -> outcome (recovery, disability or death).',
          'Subclinical disease: no signs/symptoms; detectable only by laboratory tests or screening (the "invisible" part of the iceberg).',
        ],
        key: 'Pre-pathogenesis = primordial + primary prevention apply here. Early pathogenesis = secondary prevention. Late pathogenesis = tertiary prevention.',
      },
      {
        heading: 'Disease Dynamics (Occurrence in Communities)',
        bullets: [
          'Sporadic: irregular, occasional occurrence (e.g., tetanus in some communities).',
          'Endemic: constant presence of a disease in a defined area (e.g., goitre in sub-Himalayan belt); hyperendemic = persistently high levels.',
          'Epidemic / outbreak: occurrence clearly IN EXCESS of normal expectancy in a community or area.',
          'Pandemic: epidemic spread over several countries/continents (e.g., COVID-19, plague of the 14th century, influenza 1918).',
          'Exotic: disease imported into a country where it does not normally occur.',
          'Epidemic types: point-source / common-source single exposure (food poisoning), propagated (person-to-person spread), slow or modern epidemic (e.g., CHD from lifestyle change).',
        ],
      },
      {
        heading: 'Uses of Incubation Period',
        bullets: [
          'Identifying the point source and exposure window in outbreak investigation.',
          'Determining quarantine/observation periods and follow-up of contacts.',
          'Timing immunization or prophylaxis (e.g., post-exposure measles vaccine).',
        ],
      },
    ],
    highYield: [
      'Pre-pathogenesis = risk factors, no disease yet',
      'Endemic = constant presence; epidemic = in excess of expectancy',
      'Point-source vs propagated epidemic — water/food poisoning vs person-to-person',
      'Secondary prevention works on EARLY pathogenesis',
    ],
    ref: 'K Park 27e, Ch. 2; IAPSM 3e',
  },
  {
    id: 'control',
    chapterId: 'health-disease',
    title: 'Concepts of Control',
    intro:
      'Control, elimination, eradication — plus monitoring, surveillance and evaluation: the vocabulary of every disease-control programme. These definitions are favourite exam questions.',
    sections: [
      {
        heading: 'The Ladder: Control -> Elimination -> Eradication',
        bullets: [
          'Disease control (WHO): ongoing operations that reduce the incidence/prevalence of disease (or transmission) to a LOCALLY ACCEPTABLE level; continued intervention is required (e.g., "TB control").',
          'Elimination of disease: interruption of transmission in a DEFINED GEOGRAPHIC AREA; zero incidence of the disease there. Measles elimination = absence of endemic measles transmission for >= 12 months in a defined area.',
          'Eradication: PERMANENT termination of ALL transmission of infection worldwide by extermination of the infectious agent; no further control measures needed — e.g., smallpox (last natural case 1977, certified eradicated 1980).',
          'India achievements: leprosy eliminated as a public health problem (< 1 case per 10,000 population) in December 2005; maternal and neonatal tetanus eliminated in 2015; certified guinea-worm-free in 2000. Wild poliovirus types 2 and 3 declared eradicated (2015, 2019).',
        ],
        key: 'Control = acceptable level (local). Elimination = zero in a defined area (measles >= 12 months). Eradication = zero globally, permanently (smallpox only).',
      },
      {
        heading: 'Monitoring, Surveillance, Evaluation',
        bullets: [
          'Monitoring: "performance and analysis of routine measurements to detect changes in the environment or health status" — continuous, routine tracking of processes/indicators.',
          'Surveillance: continuous scrutiny of disease occurrence and its determinants — systematic collection, compilation, analysis and interpretation of data PLUS feedback and action (a control loop).',
          'Sentinel surveillance: data collection from selected sample sites (e.g., HIV sentinel sites) representing the larger population.',
          'Evaluation: appraisal of the worth/merit of an intervention — "the end-point of development activities"; compares what IS with what SHOULD be (efficiency, effectiveness, impact).',
        ],
        key: 'Monitoring tells you WHAT is happening; surveillance adds interpretation, feedback and ACTION; evaluation judges the programme itself.',
      },
    ],
    highYield: [
      'Smallpox eradicated — last case 1977, certified 1980',
      'Leprosy elimination threshold: < 1 per 10,000 population (India, Dec 2005)',
      'Measles elimination = no endemic transmission >= 12 months',
      'Monitoring = routine measurements; surveillance = + analysis, feedback, action',
    ],
    ref: 'K Park 27e, Ch. 2; WHO terminology',
  },
  {
    id: 'prevention',
    chapterId: 'health-disease',
    title: 'Concepts of Prevention',
    intro:
      'Prevention now has 4 levels (primordial, primary, secondary, tertiary) mapped onto the natural history of disease — with examples that are repeatedly asked in exams.',
    sections: [
      {
        heading: 'The Four Levels — with Examples',
        table: {
          caption: 'Levels of prevention',
          headers: ['Level', 'Concept', 'Examples'],
          rows: [
            ['Primordial', 'Prevent the EMERGENCE of risk factors in populations where they have not yet appeared', 'School nutrition programmes, tobacco-advertising bans, promoting exercise in children (Strasser, 1978)'],
            ['Primary', 'Action taken PRIOR to onset of disease — health promotion + specific protection', 'Immunization, iodized salt, safe water, chemoprophylaxis, health education'],
            ['Secondary', 'EARLY diagnosis and prompt treatment — halts progression and prevents complications/secondary spread', 'Pap smear screening, case-finding of TB (sputum AFB), school health check-ups'],
            ['Tertiary', 'Disability limitation + rehabilitation — reduces chronicity after disease has occurred', 'Cataract surgery, physiotherapy after stroke, vocational training of the disabled'],
          ],
        },
        key: 'Quaternary prevention (newer concept): protecting patients from over-medicalization and harm from excess investigation/treatment.',
      },
      {
        heading: 'Impairment, Disability, Handicap',
        bullets: [
          'Impairment: any loss or abnormality of psychological, physiological or anatomical structure or function (e.g., deformed foot in leprosy).',
          'Disability: restriction or lack of ability to perform an activity in the normal manner (inability to walk).',
          'Handicap: the disadvantage that limits fulfilment of a normal role (unemployment, stigma).',
          'Chain: disease -> impairment -> disability -> handicap; tertiary prevention aims to interrupt this chain.',
        ],
      },
    ],
    highYield: [
      'Primordial = prevent emergence of RISK FACTORS (Strasser 1978)',
      'Primary = health promotion + specific protection (before onset)',
      'Pap smear = secondary prevention (early diagnosis)',
      'Cataract surgery = tertiary prevention',
      'Sequence: impairment -> disability -> handicap',
    ],
    ref: 'K Park 27e, Ch. 2; IAPSM 3e',
  },
  {
    id: 'intervention',
    chapterId: 'health-disease',
    title: 'Modes of Intervention',
    intro:
      'Five modes of intervention translate prevention concepts into action — health promotion, specific protection, early diagnosis and treatment, disability limitation, and rehabilitation.',
    sections: [
      {
        heading: 'The Five Modes',
        bullets: [
          'Health promotion: "the process of enabling people to increase control over, and to improve, their health" (Ottawa Charter, 1986). Interventions: health education, environmental modification (safe water, sanitation, vector control), nutritional interventions (supplementation, fortification), lifestyle and behavioural change.',
          'Specific protection: immunization; chemoprophylaxis (INH for child contacts of TB); use of specific nutrients (vitamin A, iron-folic acid); protection against occupational hazards (PPE); avoidance of allergens.',
          'Early diagnosis and treatment: the BEST intervention for secondary prevention — reverses disease, prevents complications and stops secondary spread; done via screening (mass, selective/high-risk, multiphasic) and case-finding.',
          'Disability limitation: interrupt the chain impairment -> disability -> handicap (e.g., physiotherapy and protective footwear in leprosy to prevent deformity).',
          'Rehabilitation: medical (restore function — prosthesis, physiotherapy), vocational (restore ability to earn), social (restore family/social relations), psychological/emotional support.',
        ],
        key: 'Ottawa Charter (1986) 5 action areas: build healthy public policy, create supportive environments, strengthen community action, develop personal skills, reorient health services.',
      },
      {
        heading: 'Applying the Modes — Road Traffic Accident Example',
        bullets: [
          'Early treatment of the victim = secondary prevention (early diagnosis and treatment).',
          'Physiotherapy and defect correction = tertiary prevention (disability limitation).',
          'Vocational retraining after amputation = tertiary prevention (rehabilitation).',
          'Helmet laws and speed limits = primordial/primary prevention (preventing emergence of risk and specific protection).',
        ],
      },
    ],
    highYield: [
      'Health promotion definition — Ottawa Charter 1986',
      'Chemoprophylaxis = INH for child contacts (specific protection)',
      'Early diagnosis and treatment = best secondary modality',
      'Rehabilitation types: medical, vocational, social, psychological',
    ],
    ref: 'K Park 27e, Ch. 2; WHO Ottawa Charter',
  },
]
