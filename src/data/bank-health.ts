// Chapter 1: Concept of Health and Disease — Question bank
// Sources: K Park Textbook of PSM (27th ed.), IAPSM Textbook of Community Medicine (3rd ed.), WHO.
import type { Mcq, Saq } from './types'

export const mcqsHealth: Mcq[] = [
  // ---------------- health-wellbeing (6) ----------------
  {
    id: 'h1-health-wellbeing-m01',
    topicId: 'health-wellbeing',
    question: 'According to the WHO definition adopted in 1948, health is best described as:',
    options: [
      'The absence of disease or infirmity',
      'A state of complete physical, mental and social well-being and not merely the absence of disease or infirmity',
      'Adequate functioning of the human organism in given conditions',
      'A state of equilibrium between man and his physical environment',
    ],
    answer: 1,
    explanation:
      'The WHO definition (1948, Preamble to the WHO Constitution) describes health as a state of complete physical, mental and social well-being, not merely the absence of disease or infirmity.',
    ref: 'WHO',
  },
  {
    id: 'h1-health-wellbeing-m02',
    topicId: 'health-wellbeing',
    question: 'Which dimension of health finds NO mention in the WHO (1948) definition of health?',
    options: ['Physical well-being', 'Mental well-being', 'Social well-being', 'Spiritual well-being'],
    answer: 3,
    explanation:
      'The WHO definition covers only physical, mental and social well-being; the spiritual dimension is not mentioned, although it is counted among the dimensions of health.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-health-wellbeing-m03',
    topicId: 'health-wellbeing',
    question: 'The WHO operational definition of health describes it as:',
    options: [
      'A state of complete well-being attainable by all',
      'Absence of disease ascertained by clinical examination',
      'A condition or quality of the human organism expressing the adequate functioning of the organism in given conditions, genetic or environmental',
      'The ability to lead a socially and economically productive life',
    ],
    answer: 2,
    explanation:
      'The operational definition of health (WHO) is a condition or quality of the human organism expressing adequate functioning of the organism in given conditions, genetic or environmental.',
    ref: 'WHO',
  },
  {
    id: 'h1-health-wellbeing-m04',
    topicId: 'health-wellbeing',
    question: 'Health defined as a dynamic equilibrium between man and his environment represents the:',
    options: ['Biomedical concept', 'Psychosocial concept', 'Holistic concept', 'Ecological concept'],
    answer: 3,
    explanation:
      'The ecological concept views health as a dynamic equilibrium between man and his environment; the biomedical concept equates health with absence of disease based on germ theory.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-health-wellbeing-m05',
    topicId: 'health-wellbeing',
    question: 'Positive health is defined as:',
    options: [
      'Absence of all identifiable risk factors',
      'A level of health achievable by everyone through lifestyle changes',
      'Perfect functioning of body and mind',
      'Peak physical fitness measured by exercise tests',
    ],
    answer: 2,
    explanation:
      'Positive health means perfect functioning of body and mind; it is an ideal state that is rarely attained in practice.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-health-wellbeing-m06',
    topicId: 'health-wellbeing',
    question:
      'Gross National Happiness, an index of well-being used in place of purely economic measures, is associated with which country?',
    options: ['Bhutan', 'Nepal', 'Japan', 'Denmark'],
    answer: 0,
    explanation:
      'Gross National Happiness, promoted by the king of Bhutan, is used by that country as a measure of well-being and development beyond economic indices.',
    ref: 'K Park 27e',
  },

  // ---------------- dimensions (6) ----------------
  {
    id: 'h1-dimensions-m01',
    topicId: 'dimensions',
    question: 'Which of the following is NOT one of the six classic dimensions of health?',
    options: ['Physical', 'Spiritual', 'Nutritional', 'Vocational'],
    answer: 2,
    explanation:
      'The six classic dimensions are physical, mental, social, spiritual, emotional and vocational; nutritional is listed among the other dimensions of health.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-dimensions-m02',
    topicId: 'dimensions',
    question: 'Mental health, as defined by WHO, is best described as:',
    options: [
      'Absence of a diagnosable psychiatric disorder',
      'A state of well-being in which the individual realizes his or her own abilities, can cope with the normal stresses of life, can work productively and fruitfully, and is able to make a contribution to his or her community',
      'A state of emotional equilibrium in all situations of life',
      'Complete freedom from stress and conflict',
    ],
    answer: 1,
    explanation:
      'WHO defines mental health as a state of well-being in which the individual realizes own abilities, copes with normal stresses of life, works productively and contributes to the community.',
    ref: 'WHO',
  },
  {
    id: 'h1-dimensions-m03',
    topicId: 'dimensions',
    question: 'The dimension of health that is easiest to conceive and assess is the:',
    options: ['Mental', 'Social', 'Physical', 'Spiritual'],
    answer: 2,
    explanation:
      'The physical dimension, concerned with perfect functioning of the body, is the easiest to conceive and assess objectively.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-dimensions-m04',
    topicId: 'dimensions',
    question: 'Which statement correctly differentiates the emotional dimension from the mental dimension of health?',
    options: [
      'Mental dimension relates to feelings while emotional dimension relates to cognition',
      'Emotional and mental dimensions are essentially the same',
      'The emotional dimension can be assessed by intelligence testing',
      'Emotional dimension relates to feelings while mental dimension relates to knowing and cognition',
    ],
    answer: 3,
    explanation:
      'The mental dimension pertains to knowing (cognition) while the emotional dimension pertains to feelings; intelligence tests assess cognition, not emotions.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-dimensions-m05',
    topicId: 'dimensions',
    question: 'A worker who derives satisfaction and a sense of achievement from his occupation displays which dimension of health?',
    options: ['Social', 'Vocational', 'Physical', 'Emotional'],
    answer: 1,
    explanation:
      'In the vocational dimension, work is viewed as a source of satisfaction and achievement in life.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-dimensions-m06',
    topicId: 'dimensions',
    question: 'Integrity, principles, ethics and purpose in life belong to which dimension of health?',
    options: ['Mental', 'Social', 'Philosophical', 'Spiritual'],
    answer: 3,
    explanation:
      'The spiritual dimension relates to integrity, principles and ethics, and the purpose of life.',
    ref: 'K Park 27e',
  },

  // ---------------- spectrum (6) ----------------
  {
    id: 'h1-spectrum-m01',
    topicId: 'spectrum',
    question: 'In the spectrum of health, the stage immediately following unrecognized sickness is:',
    options: ['Severe sickness', 'Mild sickness', 'Better health', 'Freedom from sickness'],
    answer: 1,
    explanation:
      'The spectrum runs: positive health, better health, freedom from sickness, unrecognized sickness, mild sickness, severe sickness and death.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-spectrum-m02',
    topicId: 'spectrum',
    question: 'The spectrum of health is best described as:',
    options: [
      'A dynamic continuum extending from positive health to death',
      'A fixed state attained once all diseases are cured',
      'A range limited to clinically recognizable disease',
      'A cycle that alternates between sickness and recovery',
    ],
    answer: 0,
    explanation:
      'Health is dynamic and the spectrum of health is a continuum from positive health at one end to death at the other.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-spectrum-m03',
    topicId: 'spectrum',
    question: 'The two axes of the high-level wellness grid described by Dunn (1961) are:',
    options: [
      'Physical axis and mental axis',
      'Genetic axis and social axis',
      'Health axis and environmental axis',
      'Individual axis and community axis',
    ],
    answer: 2,
    explanation:
      'Dunn (1961) grid uses a health axis (from peak death to peak wellness) and an environmental axis (from very unfavorable to very favorable).',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-spectrum-m04',
    topicId: 'spectrum',
    question: 'High-level wellness is defined as:',
    options: [
      'Complete freedom from all known diseases',
      'Peak physical fitness achieved through training',
      'Absence of disease despite exposure to risk factors',
      'A high level of physical and mental well-being in a favorable environment',
    ],
    answer: 3,
    explanation:
      'High-level wellness (Halbert L. Dunn, 1961) is a high level of physical and mental well-being in a favorable environment.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-spectrum-m05',
    topicId: 'spectrum',
    question: 'Freedom from disease is not the same as health because:',
    options: [
      'Disease-free persons may still have subclinical pathology and may not enjoy positive well-being',
      'Health can exist only in the presence of disease',
      'Disease freedom can be measured while health cannot',
      'The two terms are exactly synonymous in public health practice',
    ],
    answer: 0,
    explanation:
      'Subclinical and inapparent disease states exist, so absence of demonstrable disease does not guarantee health; sero-epidemiology is often needed to detect them.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-spectrum-m06',
    topicId: 'spectrum',
    question:
      'A 45-year-old man feels perfectly well, but a health camp detects symptomless hypertension. In the spectrum of health, he currently lies in:',
    options: ['Positive health', 'Unrecognized sickness', 'Mild sickness', 'Better health'],
    answer: 1,
    explanation:
      'Symptomless but detectable disease lies in the unrecognized sickness zone of the spectrum and forms the hidden part of the iceberg.',
    ref: 'IAPSM 3e',
  },

  // ---------------- determinants (5) ----------------
  {
    id: 'h1-determinants-m01',
    topicId: 'determinants',
    question: 'The leading cause of illness and death in the developed countries today is:',
    options: ['Genetic defects', 'Microbial infections', 'Lifestyle and human behaviour', 'Natural ageing'],
    answer: 2,
    explanation:
      'Lifestyle factors (smoking, alcohol, drug abuse, obesity, sedentary habits) cause most illness in developed countries; these are called diseases of human origin.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-determinants-m02',
    topicId: 'determinants',
    question: 'Which of the following diseases is primarily determined by heredity?',
    options: ['Cholera', 'Thalassaemia', 'Malaria', 'Coronary heart disease'],
    answer: 1,
    explanation:
      'Thalassaemia, like sickle cell anaemia, G6PD deficiency and haemophilia, is genetically determined; genetic counselling and screening are the available options.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-determinants-m03',
    topicId: 'determinants',
    question: 'As per Census 2011, the sex ratio of India is:',
    options: ['933 females per 1000 males', '954 females per 1000 males', '943 females per 1000 males', '927 females per 1000 males'],
    answer: 2,
    explanation:
      'The sex ratio of India as per Census 2011 is 943 females per 1000 males (it was 933 in Census 2001).',
    ref: 'IAPSM 3e',
  },
  {
    id: 'h1-determinants-m04',
    topicId: 'determinants',
    question: 'Ageing of the population as a determinant of health chiefly results in:',
    options: [
      'A rising burden of chronic diseases and geriatric care needs',
      'An increased incidence of communicable diseases',
      'A fall in expectation of life',
      'Reduced utilization of health services',
    ],
    answer: 0,
    explanation:
      'With ageing of the population, chronic non-communicable diseases and the burden of geriatric care rise sharply.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-determinants-m05',
    topicId: 'determinants',
    question:
      'The 1917 revolution in the USSR, which revolutionized the health services of that country, illustrates the role of which determinant of health?',
    options: ['Heredity', 'Political system', 'Ageing of the population', 'Advances in medical technology'],
    answer: 1,
    explanation:
      'The USSR (1917) example shows how the political system revolutionized health services; economic status is measured by GNP and per capita income.',
    ref: 'K Park 27e',
  },

  // ---------------- indicators (7) ----------------
  {
    id: 'h1-indicators-m01',
    topicId: 'indicators',
    question: 'As per SRS 2020, the infant mortality rate (IMR) of India is:',
    options: ['20 per 1000 live births', '32 per 1000 live births', '97 per 1000 live births', '28 per 1000 live births'],
    answer: 3,
    explanation:
      'SRS 2020: IMR 28, NMR 20 and U5MR 32 per 1000 live births; the distractors 20, 32 and 97 correspond to NMR, U5MR and MMR (per 100,000 live births, SRS 2018-20).',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-indicators-m02',
    topicId: 'indicators',
    question: 'The most sensitive single indicator of the health status of a community is:',
    options: ['Crude death rate', 'Maternal mortality ratio', 'Infant mortality rate', 'Expectation of life at birth'],
    answer: 2,
    explanation:
      'IMR is the most sensitive indicator of the health status of a community and is also regarded as an index of overall development.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-indicators-m03',
    topicId: 'indicators',
    question: 'Which indicator is regarded as the most sensitive measure of the quality of maternal and child health services?',
    options: ['Maternal mortality ratio', 'Infant mortality rate', 'Crude birth rate', 'Neonatal mortality rate'],
    answer: 0,
    explanation:
      'MMR is the sensitive indicator of the quality of MCH services; for India it is 97 per 100,000 live births (SRS 2018-20) and 93 per SRS 2019-21.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-indicators-m04',
    topicId: 'indicators',
    question: 'UNICEF considers the under-five mortality rate (U5MR) the most sensitive indicator of:',
    options: [
      'Quality of antenatal services',
      'Child health status and social development',
      'Economic growth alone',
      'Environmental sanitation',
    ],
    answer: 1,
    explanation:
      'UNICEF regards U5MR as the most sensitive indicator of child health status and social development; U5MR of India is 32 per 1000 live births (SRS 2020).',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-indicators-m05',
    topicId: 'indicators',
    question: 'One DALY (disability-adjusted life year) is calculated as:',
    options: [
      'Years of life lost minus years lived with disability',
      'Incidence multiplied by average duration of disease',
      'Years of life lost plus years lived with disability',
      'HALE added to QALY',
    ],
    answer: 2,
    explanation:
      'DALY equals YLL (years of life lost) plus YLD (years lived with disability); HALE is health-adjusted life expectancy and QALY is quality-adjusted life year.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-indicators-m06',
    topicId: 'indicators',
    question: 'Which of the following is NOT a component of the Physical Quality of Life Index (PQLI)?',
    options: ['Infant mortality rate', 'Basic literacy rate', 'Per capita gross national product', 'Life expectancy at age 1'],
    answer: 2,
    explanation:
      'PQLI combines infant mortality rate, life expectancy at age 1 and basic literacy rate (each scaled 0-100); GNI per capita PPP is a component of HDI, not PQLI.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-indicators-m07',
    topicId: 'indicators',
    question: 'The total number of targets under Sustainable Development Goal 3 is:',
    options: ['9', '13', '17', '26'],
    answer: 1,
    explanation:
      'SDG 3 (ensure healthy lives and promote well-being for all at all ages) has 9 health targets plus 4 means of implementation (3.a to 3.d), i.e. 13 targets, including MMR below 70 per 100,000 and UHC by 2030.',
    ref: 'WHO',
  },

  // ---------------- causation (7) ----------------
  {
    id: 'h1-causation-m01',
    topicId: 'causation',
    question: 'The germ theory of disease was established by:',
    options: ['Pettenkofer', 'MacMahon and Pugh', 'Rothman', 'Pasteur and Koch'],
    answer: 3,
    explanation:
      'Germ theory was established by Pasteur and Koch; Pettenkofer advanced the multifactorial (environmental) view of causation.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-causation-m02',
    topicId: 'causation',
    question: 'The epidemiological triad of disease consists of:',
    options: [
      'Agent, host and environment',
      'Time, place and person',
      'Agent, vector and reservoir',
      'Incidence, prevalence and duration',
    ],
    answer: 0,
    explanation:
      'The epidemiological triad comprises agent, host and environment; a vector is sometimes added as a fourth link.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-causation-m03',
    topicId: 'causation',
    question: 'Which of the following is an endogenous chemical agent of disease?',
    options: [
      'Pollens acting as allergens',
      'Uraemia due to retained urea in renal failure',
      'Lead in paints',
      'Silica dust in mines',
    ],
    answer: 1,
    explanation:
      'Endogenous chemical agents are produced within the body (e.g. urea causing uraemia, uric acid, bilirubin); pollens, lead and silica are exogenous agents.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-causation-m04',
    topicId: 'causation',
    question: 'The web of causation proposed by MacMahon and Pugh is most useful for studying:',
    options: [
      'Acute infections with a single agent',
      'Purely genetic disorders',
      'Chronic diseases such as coronary heart disease with multiple risk factors',
      'Iatrogenic diseases only',
    ],
    answer: 2,
    explanation:
      'The web of causation links multiple mutually interacting factors and suits chronic diseases, e.g. CHD with smoking, hypertension, hyperlipidaemia and stress.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-causation-m05',
    topicId: 'causation',
    question:
      'In the causal pie model of Rothman, infection with Mycobacterium tuberculosis is best described as:',
    options: [
      'A sufficient but not necessary cause of tuberculosis',
      'A necessary but not sufficient cause of tuberculosis',
      'Both a necessary and a sufficient cause',
      'Neither a necessary nor a sufficient cause',
    ],
    answer: 1,
    explanation:
      'A sufficient cause is a combination of component causes; M. tuberculosis is necessary (must be present) but is not sufficient by itself to cause clinical tuberculosis.',
    ref: 'IAPSM 3e',
  },
  {
    id: 'h1-causation-m06',
    topicId: 'causation',
    question:
      'In the wheel model of disease causation described by Mausner and Kramer, the hub of the wheel represents:',
    options: [
      'The genetic make-up (genetic core) of the individual',
      'The physical environment',
      'The biological environment',
      'The social environment',
    ],
    answer: 0,
    explanation:
      'The wheel model places the genetic core at the hub, surrounded by spokes representing the physical, biological and social environment.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-causation-m07',
    topicId: 'causation',
    question: 'A patient tells the doctor, "I do not feel well." This subjective feeling is termed:',
    options: ['Disease', 'Sickness', 'Illness', 'Impairment'],
    answer: 2,
    explanation:
      'Illness is the subjective feeling of not being well; disease is objective physiological or psychological dysfunction, and sickness is the social role of the sick person.',
    ref: 'K Park 27e',
  },

  // ---------------- natural-history (6) ----------------
  {
    id: 'h1-natural-history-m01',
    topicId: 'natural-history',
    question: 'The pre-pathogenesis phase in the natural history of disease refers to:',
    options: [
      'The period from entry of the agent to appearance of first symptoms',
      'The period before disease onset, when agent, host and environment interact',
      'The period of subclinical disease following infection',
      'The period extending from recovery to death',
    ],
    answer: 1,
    explanation:
      'Pre-pathogenesis is the phase before disease onset, when agent, host and environment interact to create risk factors.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-natural-history-m02',
    topicId: 'natural-history',
    question: 'The correct sequence of events during the pathogenesis phase of disease is:',
    options: [
      'Clinical disease, subclinical disease, outcome',
      'Outcome, clinical disease, subclinical disease',
      'Subclinical disease, clinical disease, outcome',
      'Risk factors, outcome, subclinical disease',
    ],
    answer: 2,
    explanation:
      'Pathogenesis runs from entry of the agent through subclinical disease and clinical disease to outcome (recovery, disability or death).',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-natural-history-m03',
    topicId: 'natural-history',
    question: 'Primordial and primary prevention operate during which phase of the natural history of disease?',
    options: ['Pre-pathogenesis phase', 'Early pathogenesis phase', 'Late pathogenesis phase', 'Terminal outcome stage'],
    answer: 0,
    explanation:
      'Pre-pathogenesis is targeted by primordial and primary prevention; early pathogenesis by secondary prevention and late pathogenesis by tertiary prevention.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-natural-history-m04',
    topicId: 'natural-history',
    question:
      'The constant presence of a disease or infectious agent within a given geographic area or population is termed:',
    options: ['Epidemic', 'Pandemic', 'Sporadic', 'Endemic'],
    answer: 3,
    explanation:
      'Endemic means constant presence of disease in a defined area; sporadic means occasional and irregular occurrence, and epidemic means clearly in excess of normal expectancy.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-natural-history-m05',
    topicId: 'natural-history',
    question: 'The COVID-19 outbreak, which spread to almost all countries of the world, is best termed a:',
    options: ['Point-source epidemic', 'Pandemic', 'Endemic disease', 'Sporadic occurrence'],
    answer: 1,
    explanation:
      'A pandemic is a worldwide epidemic; COVID-19 and the plague of the 14th century are classic examples.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-natural-history-m06',
    topicId: 'natural-history',
    question:
      'Guests at a community feast develop acute gastroenteritis within a few hours of the meal, and no further cases occur later. This is a:',
    options: [
      'Propagated epidemic',
      'Slow (modern) epidemic',
      'Hyperendemic disease',
      'Point-source (common-source, single exposure) epidemic',
    ],
    answer: 3,
    explanation:
      'In a common-source single-exposure epidemic all cases occur within one incubation period of a single exposure; propagated epidemics show person-to-person spread.',
    ref: 'IAPSM 3e',
  },

  // ---------------- control (5) ----------------
  {
    id: 'h1-control-m01',
    topicId: 'control',
    question: 'Which statement about disease control, as defined by WHO, is correct?',
    options: [
      'All transmission is permanently terminated worldwide',
      'Intervention can be stopped once zero incidence is reached',
      'Transmission is reduced to a locally acceptable level and continued intervention is needed',
      'Control implies complete disappearance of the infectious agent',
    ],
    answer: 2,
    explanation:
      'WHO defines control as ongoing operations reducing incidence, prevalence or transmission to a locally acceptable level, so intervention must continue (e.g. TB control).',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-control-m02',
    topicId: 'control',
    question: 'WHO certified the global eradication of smallpox in:',
    options: ['1977', '1980', '1988', '2000'],
    answer: 1,
    explanation:
      'The last natural case of smallpox occurred in Somalia in 1977; WHO certified global eradication in 1980.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-control-m03',
    topicId: 'control',
    question: 'Elimination of leprosy as a public health problem is defined as reducing the prevalence below:',
    options: ['1 case per 1000 population', '1 case per 100,000 population', '1 case per 10,000 population', 'Complete absence of cases'],
    answer: 2,
    explanation:
      'Leprosy elimination as a public health problem means prevalence below 1 case per 10,000 population; India achieved this level in December 2005.',
    ref: 'IAPSM 3e',
  },
  {
    id: 'h1-control-m04',
    topicId: 'control',
    question: 'India was validated for elimination of maternal and neonatal tetanus in the year:',
    options: ['2005', '2000', '1980', '2015'],
    answer: 3,
    explanation:
      'India eliminated maternal and neonatal tetanus in 2015; India was certified guinea-worm-free in 2000, and wild poliovirus types 2 and 3 were declared eradicated in 2015 and 2019.',
    ref: 'IAPSM 3e',
  },
  {
    id: 'h1-control-m05',
    topicId: 'control',
    question:
      'Continuous scrutiny of the factors that determine the occurrence and spread of disease, including collection, analysis, interpretation and feedback, is termed:',
    options: ['Monitoring', 'Evaluation', 'Surveillance', 'Screening'],
    answer: 2,
    explanation:
      'Surveillance is continuous scrutiny of disease-determining factors with feedback and action; monitoring is routine measurement to detect changes, and evaluation appraises the worth of a programme.',
    ref: 'K Park 27e',
  },

  // ---------------- prevention (7) ----------------
  {
    id: 'h1-prevention-m01',
    topicId: 'prevention',
    question: 'Primordial prevention is best defined as:',
    options: [
      'Action taken prior to disease onset in high-risk individuals only',
      'Early diagnosis and prompt treatment of disease',
      'Prevention of the emergence of risk factors in populations where they have not yet appeared',
      'Disability limitation and rehabilitation after disease',
    ],
    answer: 2,
    explanation:
      'Primordial prevention stops risk factors from emerging in a population where they have not yet appeared, e.g. preventing obesity in children.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-prevention-m02',
    topicId: 'prevention',
    question: 'The term primordial prevention was coined by:',
    options: ['Strasser (1978)', 'Halbert L. Dunn (1961)', 'Leavell and Clark', 'Rothman'],
    answer: 0,
    explanation: 'The term primordial prevention was introduced by Strasser in 1978.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-prevention-m03',
    topicId: 'prevention',
    question: 'The two modes of intervention under primary prevention are:',
    options: [
      'Early diagnosis and disability limitation',
      'Specific protection and rehabilitation',
      'Health promotion and early diagnosis',
      'Health promotion and specific protection',
    ],
    answer: 3,
    explanation:
      'Primary prevention acts before disease onset through its two modes: health promotion and specific protection.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-prevention-m04',
    topicId: 'prevention',
    question: 'Distribution of iodized salt in a goitre-endemic district is an example of:',
    options: ['Health promotion', 'Specific protection', 'Early diagnosis and treatment', 'Rehabilitation'],
    answer: 1,
    explanation:
      'Iodized salt is specific protection; other examples are immunization, chemoprophylaxis and use of specific nutrients such as vitamin A and iron-folic acid.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-prevention-m05',
    topicId: 'prevention',
    question: 'Screening of women by Pap smear for early detection of cervical cancer is an example of:',
    options: ['Primordial prevention', 'Primary prevention', 'Secondary prevention', 'Tertiary prevention'],
    answer: 2,
    explanation:
      'Pap smear screening is early diagnosis and prompt treatment (secondary prevention); it is valid only when disease is detectable pre-clinically and treatment alters outcome.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-prevention-m06',
    topicId: 'prevention',
    question:
      'After a stroke, a patient cannot dress himself although no new structural loss has occurred. This restriction of ability to perform an activity is termed:',
    options: ['Impairment', 'Disability', 'Handicap', 'Infirmity'],
    answer: 1,
    explanation:
      'The chain is: disease leads to impairment (loss of structure or function), then disability (restriction of activity), then handicap (disadvantage in fulfilling normal role).',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-prevention-m07',
    topicId: 'prevention',
    question: 'Quaternary prevention, an emerging concept, aims at:',
    options: [
      'Preventing the emergence of new risk factors in a population',
      'Limiting disability after acute injury',
      'Providing vocational training to the disabled',
      'Protecting patients from over-medicalization and harm from excess investigations and treatment',
    ],
    answer: 3,
    explanation:
      'Quaternary prevention protects patients from over-medicalization and from harm due to excessive diagnostics and treatment.',
    ref: 'IAPSM 3e',
  },

  // ---------------- intervention (7) ----------------
  {
    id: 'h1-intervention-m01',
    topicId: 'intervention',
    question: 'Which of the following is NOT one of the five modes of intervention in disease?',
    options: ['Health promotion', 'Quarantine', 'Specific protection', 'Rehabilitation'],
    answer: 1,
    explanation:
      'The five modes are health promotion, specific protection, early diagnosis and treatment, disability limitation and rehabilitation; quarantine is not one of them.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-intervention-m02',
    topicId: 'intervention',
    question: 'As per the Ottawa Charter (1986), health promotion is the process of:',
    options: [
      'Providing free medical care to all sections of society',
      'Protecting people against specific diseases by immunization',
      'Enabling people to increase control over and to improve their health',
      'Detecting disease early through periodic screening of populations',
    ],
    answer: 2,
    explanation:
      'The Ottawa Charter (1st International Conference on Health Promotion, 1986) defines health promotion as enabling people to increase control over and to improve their health.',
    ref: 'WHO',
  },
  {
    id: 'h1-intervention-m03',
    topicId: 'intervention',
    question: 'Which of the following is one of the five action areas of the Ottawa Charter for Health Promotion?',
    options: [
      'Specific protection against occupational hazards',
      'Mass screening of the adult population',
      'Chemoprophylaxis of disease contacts',
      'Reorientation of health services',
    ],
    answer: 3,
    explanation:
      'Ottawa action areas: build healthy public policy, create supportive environments, strengthen community action, develop personal skills and reorient health services.',
    ref: 'WHO',
  },
  {
    id: 'h1-intervention-m04',
    topicId: 'intervention',
    question:
      'Isoniazid chemoprophylaxis given to a young child contact of an open pulmonary tuberculosis case is an example of:',
    options: ['Health promotion', 'Early diagnosis and treatment', 'Specific protection', 'Disability limitation'],
    answer: 2,
    explanation:
      'Chemoprophylaxis is specific protection; other examples are immunization, vitamin A and iron-folic acid supplementation and personal protective equipment at work.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-intervention-m05',
    topicId: 'intervention',
    question: 'Which mode of intervention is described as the best modality of intervention?',
    options: ['Health promotion', 'Early diagnosis and treatment', 'Specific protection', 'Rehabilitation'],
    answer: 1,
    explanation:
      'Early diagnosis and treatment is called the best modality of intervention because it reverses disease, prevents complications and stops secondary spread.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-intervention-m06',
    topicId: 'intervention',
    question:
      'Retraining a disabled young man in a skill that restores his ability to earn a livelihood is an example of:',
    options: ['Medical rehabilitation', 'Vocational rehabilitation', 'Social rehabilitation', 'Psychological rehabilitation'],
    answer: 1,
    explanation:
      'Vocational rehabilitation restores the ability to earn; medical rehabilitation restores function (e.g. prosthesis), social rehabilitation restores relationships.',
    ref: 'K Park 27e',
  },
  {
    id: 'h1-intervention-m07',
    topicId: 'intervention',
    question:
      'In a victim of a road traffic accident, physiotherapy and a protective brace to prevent deformity represent:',
    options: ['Specific protection', 'Primordial prevention', 'Early diagnosis', 'Disability limitation'],
    answer: 3,
    explanation:
      'Physiotherapy and protective devices after injury limit disability (tertiary prevention), as with physiotherapy and protective footwear in leprosy; vocational retraining would be rehabilitation.',
    ref: 'IAPSM 3e',
  },
]

export const saqsHealth: Saq[] = [
  // ---------------- health-wellbeing (2) ----------------
  {
    id: 'h1-health-wellbeing-s01',
    topicId: 'health-wellbeing',
    question: 'Define health as per WHO (1948). State one criticism of this definition.',
    answerPoints: [
      'A state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.',
      'Criticized as utopian and unattainable because of the word complete, which is difficult to achieve.',
    ],
    ref: 'WHO',
  },
  {
    id: 'h1-health-wellbeing-s02',
    topicId: 'health-wellbeing',
    question: 'List any four elements of the new philosophy of health.',
    answerPoints: [
      'Health is a fundamental human right and the essence of productive life.',
      'Health is an intersectoral concern and a worldwide social goal.',
      'Health is an investment and an integral part of development.',
      'Health is central to the concept of quality of life.',
    ],
    ref: 'K Park 27e',
  },

  // ---------------- dimensions (2) ----------------
  {
    id: 'h1-dimensions-s01',
    topicId: 'dimensions',
    question: 'Define mental health as per WHO.',
    answerPoints: [
      'A state of well-being in which the individual realizes his or her own abilities.',
      'The person can cope with the normal stresses of life and work productively and fruitfully.',
      'The individual is able to make a contribution to his or her community.',
    ],
    ref: 'WHO',
  },
  {
    id: 'h1-dimensions-s02',
    topicId: 'dimensions',
    question: 'Name the six classic dimensions of health.',
    answerPoints: [
      'The first three are physical, mental and social dimensions.',
      'The other three are spiritual, emotional and vocational dimensions.',
    ],
    ref: 'K Park 27e',
  },

  // ---------------- spectrum (2) ----------------
  {
    id: 'h1-spectrum-s01',
    topicId: 'spectrum',
    question: 'Name the levels of the spectrum of health in the correct sequence.',
    answerPoints: [
      'Positive health, better health and freedom from sickness come first.',
      'Then unrecognized sickness, mild sickness and severe sickness.',
      'Health is a dynamic continuum that finally terminates in death.',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'h1-spectrum-s02',
    topicId: 'spectrum',
    question: 'What is high-level wellness? Name the two axes of the Dunn wellness grid.',
    answerPoints: [
      'High-level wellness is a high level of physical and mental well-being in a favorable environment.',
      'It was described by Halbert L. Dunn in 1961 using his wellness grid.',
      'The grid uses a health axis and an environmental axis.',
    ],
    ref: 'K Park 27e',
  },

  // ---------------- determinants (2) ----------------
  {
    id: 'h1-determinants-s01',
    topicId: 'determinants',
    question: 'List any four determinants of health.',
    answerPoints: [
      'Heredity, meaning the genetic endowment inherited by the individual.',
      'Environment, both internal and external, including physical, biological and psychosocial factors.',
      'Lifestyle and socio-economic conditions of the individual and family.',
      'Health services, ageing of population, gender and education.',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'h1-determinants-s02',
    topicId: 'determinants',
    question: 'What are diseases of human origin? Give two examples of lifestyle risk factors.',
    answerPoints: [
      'Diseases of human origin arise from lifestyle and behaviour, the leading cause of illness in developed countries.',
      'Examples of risk factors: smoking, alcohol and drug abuse.',
      'Other lifestyle risk factors: obesity and sedentary living.',
    ],
    ref: 'K Park 27e',
  },

  // ---------------- indicators (3) ----------------
  {
    id: 'h1-indicators-s01',
    topicId: 'indicators',
    question: 'Differentiate between incidence and prevalence (any 2 points).',
    answerPoints: [
      'Incidence is the number of new cases of a disease occurring in a defined population during a specified period.',
      'Prevalence is the total number of existing cases, old and new, present in a population at a given time.',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'h1-indicators-s02',
    topicId: 'indicators',
    question: 'Define infant mortality rate. State its SRS 2020 value for India and its importance as an indicator.',
    answerPoints: [
      'IMR is the number of deaths of infants under one year per 1000 live births in a given year.',
      'India SRS 2020 reports an IMR of 28 per 1000 live births.',
      'IMR is the most sensitive indicator of community health status and an index of development.',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'h1-indicators-s03',
    topicId: 'indicators',
    question: 'What is a DALY? Name its two components.',
    answerPoints: [
      'DALY (disability-adjusted life year) measures disease burden as years of healthy life lost.',
      'One DALY equals years of life lost (YLL) plus years lived with disability (YLD).',
    ],
    ref: 'K Park 27e',
  },

  // ---------------- causation (2) ----------------
  {
    id: 'h1-causation-s01',
    topicId: 'causation',
    question: 'Name the components of the epidemiological triad. List any two types of disease agents.',
    answerPoints: [
      'The triad consists of agent, host and environment (a vector may be added).',
      'Types of agents: biological agents such as viruses and bacteria, and nutrient agents such as deficient diets.',
      'Other types: physical, chemical, mechanical and social agents.',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'h1-causation-s02',
    topicId: 'causation',
    question: 'What is the iceberg phenomenon of disease? Give one example and state its importance.',
    answerPoints: [
      'Clinical disease is only the tip of the iceberg; most infections remain subclinical or inapparent in the community.',
      'Example: poliomyelitis has about 1 paralytic case per 1000 inapparent infections in children.',
      'Control measures must therefore cover subclinical cases and carriers; sero-epidemiology is needed for detection.',
    ],
    ref: 'IAPSM 3e',
  },

  // ---------------- natural-history (2) ----------------
  {
    id: 'h1-natural-history-s01',
    topicId: 'natural-history',
    question: 'Define natural history of disease and name its two phases.',
    answerPoints: [
      'Natural history is the course of a disease in a person from onset to final outcome without treatment.',
      'Two phases: pre-pathogenesis (before disease onset) and pathogenesis (agent entry to recovery, disability or death).',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'h1-natural-history-s02',
    topicId: 'natural-history',
    question: 'State any three uses of the incubation period in epidemiology.',
    answerPoints: [
      'Helps identify the point source of an outbreak and the probable time of exposure.',
      'Defines the window for surveillance of contacts and for quarantine or isolation decisions.',
      'Guides the timing of immunization or chemoprophylaxis for controlling an epidemic.',
    ],
    ref: 'K Park 27e',
  },

  // ---------------- control (2) ----------------
  {
    id: 'h1-control-s01',
    topicId: 'control',
    question: 'Differentiate between elimination and eradication of disease (any 2 points).',
    answerPoints: [
      'Elimination: interruption of transmission in a defined geographic area; eradication: permanent termination of all transmission worldwide.',
      'Eradication needs no further control measures, while elimination still requires continued surveillance and intervention.',
      'Examples: measles elimination needs 12 months or more without endemic transmission; smallpox eradication certified in 1980.',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'h1-control-s02',
    topicId: 'control',
    question: 'Define disease surveillance and name any two of its types.',
    answerPoints: [
      'Surveillance is continuous scrutiny of factors determining disease occurrence and spread, with collection, analysis, interpretation and feedback for action.',
      'Two main types are active surveillance and passive surveillance.',
      'Sentinel surveillance is conducted through selected reporting centres.',
    ],
    ref: 'K Park 27e',
  },

  // ---------------- prevention (3) ----------------
  {
    id: 'h1-prevention-s01',
    topicId: 'prevention',
    question: 'Define primordial prevention with one example.',
    answerPoints: [
      'Preventing the emergence of risk factors in populations where they have not yet appeared.',
      'Examples: school nutrition programmes, ban on tobacco advertising, promoting physical activity to prevent obesity and diabetes in children.',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'h1-prevention-s02',
    topicId: 'prevention',
    question: 'Name the four levels of prevention with one example of each.',
    answerPoints: [
      'Primordial: preventing emergence of risk factors, e.g. school nutrition programmes.',
      'Primary: health promotion and specific protection, e.g. immunization.',
      'Secondary: early diagnosis and prompt treatment, e.g. Pap smear screening.',
      'Tertiary: disability limitation and rehabilitation, e.g. cataract surgery or physiotherapy.',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'h1-prevention-s03',
    topicId: 'prevention',
    question: 'Define impairment, disability and handicap (one line each).',
    answerPoints: [
      'Impairment: any loss or abnormality of anatomical, physiological or psychological structure or function.',
      'Disability: any restriction of the ability to perform an activity in the normal manner.',
      'Handicap: a disadvantage that limits the fulfilment of the normal role of the individual.',
    ],
    ref: 'K Park 27e',
  },

  // ---------------- intervention (2) ----------------
  {
    id: 'h1-intervention-s01',
    topicId: 'intervention',
    question: 'List the five modes of intervention in disease.',
    answerPoints: [
      'The five modes are health promotion and specific protection.',
      'Then early diagnosis and prompt treatment of disease.',
      'Finally disability limitation and rehabilitation after disease onset.',
    ],
    ref: 'K Park 27e',
  },
  {
    id: 'h1-intervention-s02',
    topicId: 'intervention',
    question: 'Name any four types of screening used for early diagnosis of disease.',
    answerPoints: [
      'Mass screening applied to the whole population regardless of risk.',
      'Selective screening restricted to identified high-risk or vulnerable groups.',
      'Multiphasic screening using several tests at the same visit.',
      'Case-finding or opportunistic screening during routine patient contact.',
    ],
    ref: 'K Park 27e',
  },
]
