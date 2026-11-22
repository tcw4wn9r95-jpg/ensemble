/* Core registry + exam information. Loaded before the module files. */
window.VE = {
  modules: [],
  addModule(m) {
    m.questions.forEach((q, i) => {
      q.id = m.id + '-' + i;
      q.m = m.id;
    });
    this.modules.push(m);
  },
  exam: {
    total: 40,
    minutes: 60,
    pass: 28,
    distribution: { rights: 10, institutions: 20, history: 10 }
  },
  info: {
    format: [
      ['Format', 'Computer-based multiple-choice test (single correct answer; some questions may be dual-choice / true–false)'],
      ['Questions', '40 in total: 10 on fundamental rights, 20 on State & communal institutions, 10 on history & European integration'],
      ['Duration', '60 minutes (as commonly reported)'],
      ['Pass mark', 'At least 28 correct answers out of 40 (70%, as commonly reported)'],
      ['Venue', 'Esch-Belval (Service de la formation des adultes, Ministry of Education)'],
      ['Cost', 'Free (course and exam)'],
      ['Registration', 'Online only, via the Vivre ensemble portal (ssl.education.lu/ve-portal). Registration is final and can only be redone after the date has passed'],
      ['Alternative', 'Attend the 24-hour course instead (6 h rights + 12 h institutions + 6 h history). An 18-hour version exists for people who already have the civic-training certificate of the integration contract']
    ],
    sources: [
      ['Official syllabus: "examination content and documentation" (PDF)', 'https://ssl.education.lu/ve-portal/assets/docs/matieres_en.pdf'],
      ['Constitution, consolidated text 1 July 2023 (Legilux)', 'https://legilux.public.lu/eli/etat/leg/constitution/1868/10/17/n1/consolide/20230701'],
      ['Constitution in FR/DE/LU (Chamber of Deputies, PDF)', 'https://www.chd.lu/sites/default/files/2023-04/Constitution_en%203%20langues.pdf'],
      ['About… the History of Luxembourg (SIP, 2022)', 'https://sip.gouvernement.lu/dam-assets/publications/brochure-livre/minist-etat/sip/brochure/a-propos/A_propos_Histoire/about-the-history-of-luxembourg-en.pdf'],
      ['About… Political Institutions in Luxembourg (SIP)', 'https://sip.gouvernement.lu/dam-assets/publications/brochure-livre/minist-etat/sip/brochure/a-propos/A_propos_Institutions_politiques/A_propos_Institutions_politiques-EN.pdf'],
      ['About… Luxembourg and the European Union (SIP)', 'https://sip.gouvernement.lu/dam-assets/publications/brochure-livre/minist-etat/sip/brochure/a-propos/A_propos_Union_europenne/AP-Union-europeenne-2015-EN.pdf'],
      ['Everything you need to know about the Grand Duchy (SIP)', 'https://sip.gouvernement.lu/dam-assets/publications/brochure-livre/minist-etat/sip/brochure/Tout_savoir_Luxembourg/Tout_savoir-EN.pdf'],
      ['10 Fact sheets about the Grand Duchy (SIP/STATEC)', 'https://luxembourg.public.lu/content/dam/luxembourg/publications/10-fiches-sur-le-grand-duche-de-luxembourg/10-fiches-sur-le-grand-duche-de-luxembourg-en.pdf'],
      ['Universal Declaration of Human Rights (UN)', 'https://www.ohchr.org/en/human-rights/universal-declaration/translations/english'],
      ['ZpB: civic education (Politik? Fir jiddereen!)', 'https://zpb.lu/pedagogical_cpt/4342/'],
      ['ZpB fact sheets (elections, ministers, referendum, monarchy…)', 'https://zpb.lu/fact-sheets/'],
      ['luxembourg.lu publications (free)', 'https://luxembourg.public.lu/en/publications.html'],
      ['Ministry of Education: courses & exam for nationality', 'https://men.public.lu/en/systeme-educatif/formation-adultes/integration-nationalite/cours-examen.html'],
      ['Guichet.lu: prerequisites for acquiring nationality', 'https://guichet.public.lu/en/citoyens/citoyennete/nationalite-luxembourgeoise/acquisition-recouvrement/conditions-prealables.html'],
      ['Vivre ensemble registration portal', 'https://ssl.education.lu/ve-portal/#/home'],
      ['Government: the political system', 'https://gouvernement.lu/en/systeme-politique.html'],
      ['Grand Ducal Court: history of the Nassau dynasty', 'https://www.monarchie.lu/en/luxembourg-monarchy/history-nassau-dynasty'],
      ['Law of 8 March 2017 on Luxembourg nationality (art. 16: the course & exam)', 'https://legilux.public.lu/eli/etat/leg/loi/2017/03/08/a289/jo']
    ]
  }
};
