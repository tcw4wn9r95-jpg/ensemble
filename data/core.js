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
      ['Ministry of Education: courses & exam for Luxembourg nationality', 'https://men.public.lu/en/systeme-educatif/formation-adultes/integration-nationalite/cours-examen.html'],
      ['Official syllabus: "matières" (PDF, Vivre ensemble portal)', 'https://ssl.education.lu/ve-portal/assets/docs/matieres_en.pdf'],
      ['Vivre ensemble registration portal', 'https://ssl.education.lu/ve-portal/#/home'],
      ['Guichet.lu: prerequisites for acquiring nationality', 'https://guichet.public.lu/en/citoyens/citoyennete/nationalite-luxembourgeoise/acquisition-recouvrement/conditions-prealables.html'],
      ['Lifelong-learning.lu: acquiring Luxembourg nationality', 'https://www.lifelong-learning.lu/formations-continues-reglementees/acquisition-de-la-nationalite-luxembourgeoise/en'],
      ['Government: the political system', 'https://gouvernement.lu/en/systeme-politique.html'],
      ['Government brochure "About… Political Institutions in Luxembourg"', 'https://sip.gouvernement.lu/dam-assets/publications/brochure-livre/minist-etat/sip/brochure/a-propos/A_propos_Institutions_politiques/A_propos_Institutions_politiques-EN.pdf'],
      ['The Constitution (Legilux)', 'https://legilux.public.lu/eli/etat/leg/constitution/1868/10/17/n1/consolide/20230701'],
      ['Chamber of Deputies', 'https://www.chd.lu'],
      ['Council of State', 'https://conseil-etat.public.lu'],
      ['The Grand Ducal Court: history of the Nassau dynasty', 'https://www.monarchie.lu/en/luxembourg-monarchy/history-nassau-dynasty'],
      ['The Grand Ducal Court: National Day & traditions', 'https://www.monarchie.lu/en/head-state/national-day-and-its-traditions'],
      ['luxembourg.lu: history', 'https://luxembourg.public.lu/en/society-and-culture/history.html'],
      ['EU: history of the European Union', 'https://european-union.europa.eu/principles-countries-history/history-eu_en'],
      ['Law of 8 March 2017 on Luxembourg nationality', 'https://legilux.public.lu/eli/etat/leg/loi/2017/03/08/a289/jo'],
      ['INLL: Luxembourgish language test (Sproochentest)', 'https://www.inll.lu/en/sproochentest-en/']
    ]
  }
};
