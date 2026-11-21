/* Module 1 — Fundamental rights of citizens (≈10 exam questions, 6 h of course)
   Question format: options[0] is always the correct answer (shuffled at runtime).
   tf:true questions are true/false ("dual choice") statements. */
VE.addModule({
  id: 'rights',
  num: 1,
  title: 'Fundamental Rights',
  fr: 'Les droits fondamentaux du citoyen',
  subtitle: 'The Constitution, your rights, freedoms and duties',
  examQuestions: 10,
  hours: 6,
  accent: 'red',
  icon: 'scale',
  lessons: [
    {
      id: 'r1',
      title: 'The Constitution & the rule of law',
      minutes: 6,
      html: `
<p class="lead">Luxembourg is a <b>democratic, free, independent and indivisible State</b>, founded on the <b>rule of law</b> (<i>État de droit</i>) and respect for human rights. All of this is written in the <b>Constitution</b>, the country's highest law.</p>

<h3>One Constitution, many revisions</h3>
<ul>
  <li>The basic text dates from <b>17 October 1868</b>. Earlier constitutions came in 1841, 1848 and 1856.</li>
  <li>After about 20 years of work, a <b>thoroughly revised Constitution entered into force on 1 July 2023</b>. It modernised the text and organised it in clear chapters.</li>
  <li>Luxembourg is a <b>parliamentary democracy in the form of a constitutional monarchy</b>. <b>Sovereignty resides in the Nation</b>, and all powers of the State come from it.</li>
</ul>

<div class="callout tip"><b>Remember:</b> 1868 is the basic text. <b>1 July 2023</b> is when the revised Constitution took effect.</div>

<h3>How the rights chapter is organised (2023)</h3>
<p>Chapter 2, <i>"Des droits et libertés"</i> (rights and freedoms), has several sections:</p>
<ol>
  <li><b>Nationality and political rights</b>: who is Luxembourgish and who may vote.</li>
  <li><b>Fundamental rights</b>: human dignity, the right to life, the ban on torture, equality, and so on.</li>
  <li><b>Public freedoms</b>: expression, the press, assembly, association, religion, education and more.</li>
  <li><b>Objectives of constitutional value</b>: goals the State must work towards, such as decent housing, the environment and climate, animal welfare, culture, research and the right to work.</li>
  <li><b>Common provisions</b>: rights may be limited <b>only by a law</b>, and the limit must respect the essence of the right and be <b>proportionate</b>.</li>
</ol>
<div class="callout"><b>Rights vs objectives:</b> you can rely on a <i>right</i> or <i>freedom</i> before a judge. An <i>objective of constitutional value</i> is a mission for the State: it guides the legislator, but it does not give you an individual right you can enforce in court.</div>

<h3>The hierarchy of norms</h3>
<div class="pyramid">
  <div>Constitution</div>
  <div>International treaties (e.g. the European Convention on Human Rights, EU law)</div>
  <div>Laws (voted by the Chamber of Deputies)</div>
  <div>Grand-ducal regulations</div>
  <div>Ministerial regulations</div>
  <div>Communal regulations</div>
</div>
<p>A lower rule must respect every rule above it. Laws and regulations are published in the <b>Journal officiel</b> (formerly the <i>Mémorial</i>) on <b>legilux.lu</b>. Only after publication can they be enforced.</p>

<h3>Rights protected at three levels</h3>
<ul>
  <li><b>National:</b> the Constitution, protected by the courts and the <b>Constitutional Court</b>.</li>
  <li><b>Council of Europe:</b> the <b>European Convention on Human Rights</b> (in force in 1953). Its judges sit at the European Court of Human Rights in <b>Strasbourg</b>. Luxembourg was a founding member of the Council of Europe in 1949.</li>
  <li><b>European Union:</b> the <b>Charter of Fundamental Rights of the EU</b>, applied by the Court of Justice of the EU, which sits in <b>Luxembourg</b>.</li>
</ul>
<p>Globally, the <b>Universal Declaration of Human Rights</b> was adopted by the UN in <b>1948</b>. Luxembourg was a founding member of the United Nations in 1945.</p>
`,
      facts: [
        ['When did the revised Constitution enter into force?', '1 July 2023'],
        ['Date of the basic Constitution text', '17 October 1868'],
        ['Form of State', 'Parliamentary democracy in the form of a constitutional monarchy'],
        ['Where does sovereignty reside?', 'In the Nation'],
        ['Can a fundamental right be restricted?', 'Only by a law, respecting its essence and the principle of proportionality'],
        ['Where are laws published?', 'In the Journal officiel (ex-Mémorial), available on legilux.lu'],
        ['Seat of the European Court of Human Rights', 'Strasbourg (Council of Europe)'],
        ['Seat of the Court of Justice of the EU', 'Luxembourg (Kirchberg)']
      ]
    },
    {
      id: 'r2',
      title: 'Dignity, equality & personal freedom',
      minutes: 6,
      html: `
<p class="lead">The fundamental rights protect the <b>person</b>: body, dignity, private life and equal treatment.</p>

<h3>Dignity and integrity</h3>
<ul>
  <li><b>Human dignity is inviolable.</b> It is the foundation of all other rights.</li>
  <li><b>Right to life.</b> The <b>death penalty is prohibited</b>. Luxembourg abolished it in <b>1979</b>.</li>
  <li><b>No torture</b> and no inhuman or degrading punishment or treatment.</li>
  <li><b>Right to physical and mental integrity.</b></li>
</ul>

<h3>Equality</h3>
<ul>
  <li><b>All Luxembourgers are equal before the law.</b> The law sets out when non-Luxembourgers are assimilated to Luxembourgers.</li>
  <li><b>Women and men are equal in rights and duties.</b> The State actively promotes the removal of obstacles to that equality.</li>
  <li><b>No discrimination</b>, for example based on origin, skin colour, sex, sexual orientation, religion or beliefs, disability or age.</li>
  <li><b>Rights of the child:</b> in every decision that concerns a child, the <b>best interest of the child</b> comes first.</li>
</ul>

<h3>Personal freedom and justice</h3>
<ul>
  <li><b>Individual liberty is guaranteed.</b> Nobody can be arrested or detained except in the cases set by law and in the form it requires. An arrested person must be told the reasons and must quickly be brought before a judge.</li>
  <li><b>No crime and no punishment without a law</b> (<i>nullum crimen, nulla poena sine lege</i>). A penalty can only be imposed under a law that already existed when the act was committed.</li>
  <li><b>Presumption of innocence</b> and the <b>right to a fair trial</b> before an independent and impartial judge, including the right to defence.</li>
  <li><b>No one can be removed from the judge assigned to them by law.</b></li>
</ul>

<h3>Private life</h3>
<ul>
  <li><b>Respect for private and family life</b>, and protection of <b>personal data</b>.</li>
  <li><b>The home is inviolable.</b> A search can only take place in the cases and forms set by law.</li>
  <li><b>Secrecy of correspondence</b> and communications.</li>
  <li><b>Right to property.</b> Nobody can lose their property except for <b>public utility</b>, in the cases set by law, and with <b>fair compensation</b>.</li>
</ul>

<div class="callout tip"><b>Society today:</b> Luxembourg legalised euthanasia (2009) and same-sex marriage and adoption (2015). It also has an active equal-treatment policy, backed by the <b>Centre for Equal Treatment</b> (CET).</div>
`,
      facts: [
        ['"Inviolable" value at the base of all rights', 'Human dignity'],
        ['Year the death penalty was abolished', '1979; the Constitution now prohibits it'],
        ['Equality of women and men', 'Equal rights and duties; the State actively promotes equality'],
        ['Principle of legality of penalties', 'No crime, no punishment without a pre-existing law'],
        ['Expropriation is allowed only…', 'For public utility, as set by law, with fair compensation'],
        ['When can a home be searched?', 'Only in the cases and forms provided by law'],
        ['Guiding principle for decisions concerning children', 'The best interest of the child']
      ]
    },
    {
      id: 'r3',
      title: 'Public freedoms',
      minutes: 7,
      html: `
<p class="lead">Public freedoms let people <b>think, speak, meet, organise and believe</b> freely. They make democratic life possible.</p>

<div class="grid2">
  <div class="mini"><h4>🗣️ Expression & press</h4><p>Everyone may express their opinions in any field. <b>Censorship can never be established.</b> The press is free. Abuses committed while using these freedoms can be punished afterwards.</p></div>
  <div class="mini"><h4>👥 Assembly</h4><p>People have the right to <b>assemble peacefully and without weapons</b>, without prior authorisation. Open-air gatherings remain subject to police laws.</p></div>
  <div class="mini"><h4>🤝 Association</h4><p>The right to form associations needs <b>no prior authorisation</b>. Clubs and ASBLs (non-profit associations) play a big role in Luxembourg.</p></div>
  <div class="mini"><h4>🕊️ Religion & belief</h4><p>Freedom of religion and freedom <b>not</b> to have one. <b>No one may be forced</b> to take part in a religion's rites. The State is <b>neutral</b>.</p></div>
  <div class="mini"><h4>🎓 Education</h4><p>Everyone has the right to education. The State organises <b>public education, free of charge</b>. Schooling is compulsory.</p></div>
  <div class="mini"><h4>✊ Unions & strike</h4><p><b>Trade union freedom</b> and the <b>right to strike</b> are guaranteed, within the limits of the law.</p></div>
  <div class="mini"><h4>📨 Petition</h4><p>Everyone may address <b>petitions</b> to public authorities. A <b>public petition</b> to the Chamber that gathers <b>4,500 signatures</b> leads to a <b>public debate</b>.</p></div>
  <div class="mini"><h4>💼 Work & social rights</h4><p>Freedom to choose one's work, the right to <b>social security</b> and <b>health protection</b>, and the <b>freedom of trade and industry</b>.</p></div>
</div>

<h3>State and religions</h3>
<ul>
  <li>Since the <b>2015 conventions</b>, the State has kept relations with the recognised faiths through agreements. These faiths include the Catholic Church, Protestant churches, the Jewish community, the Orthodox Church, the Anglican Church and the Muslim community.</li>
  <li>In schools, the course <b>"Vie et société"</b> (Life and Society) replaced separate religion and ethics classes in <b>2016/2017</b>. It is neutral and common to all pupils.</li>
</ul>

<h3>Languages</h3>
<ul>
  <li>The Constitution states that the language of Luxembourg is <b>Luxembourgish</b>. A law regulates the use of <b>Luxembourgish, French and German</b>.</li>
  <li>That law is the <b>Language Law of 24 February 1984</b>:
    <ul>
      <li><b>National language:</b> Luxembourgish.</li>
      <li><b>Legislative language:</b> French. Laws are written in French, and only the French text is authentic.</li>
      <li><b>Administrative and judicial languages:</b> French, German and Luxembourgish.</li>
      <li>When you write to an administration in one of these three languages, it should <b>answer, as far as possible, in the same language</b>.</li>
    </ul>
  </li>
</ul>
<div class="callout tip"><b>Exam trap:</b> Luxembourgish is the <i>national</i> language. Laws are written in <i>French</i>.</div>
`,
      facts: [
        ['Can censorship be introduced in Luxembourg?', 'No. Censorship can never be established'],
        ['Conditions of the right of assembly', 'Peacefully and without weapons, with no prior authorisation (open-air gatherings: police laws)'],
        ['Does creating an association need authorisation?', 'No'],
        ['Signatures needed for a public petition debate in the Chamber', '4,500'],
        ['Course that replaced religion/ethics classes in schools', '"Vie et société"'],
        ['Language law date', '24 February 1984'],
        ['National language', 'Luxembourgish'],
        ['Language of legislation', 'French'],
        ['Administrative & judicial languages', 'French, German and Luxembourgish']
      ]
    },
    {
      id: 'r4',
      title: 'Nationality & political rights',
      minutes: 6,
      html: `
<p class="lead">Political rights let citizens <b>take part in public life</b>: voting, standing for election, proposing laws and holding referendums.</p>

<h3>Luxembourg nationality</h3>
<ul>
  <li>Nationality is acquired, kept and lost according to the law. The current text is the <b>Law of 8 March 2017</b> on Luxembourg nationality.</li>
  <li><b>Multiple nationality</b> has been allowed since <b>1 January 2009</b>. You do not have to give up your original nationality.</li>
  <li>Naturalisation requires <b>5 years of legal residence</b> (the last year without interruption). You must also pass the <b>Luxembourgish language test</b> (<i>Sproochentest</i>: speaking at A2, listening at B1) and hold the <b>"Vivre ensemble au Grand-Duché de Luxembourg"</b> certificate.</li>
  <li>The certificate is obtained by following the <b>24-hour course</b> or by passing the <b>exam</b>.</li>
</ul>

<h3>Who votes in which election?</h3>
<table class="tbl">
  <tr><th>Election</th><th>Who can vote</th><th>Every</th></tr>
  <tr><td>Legislative (Chamber of Deputies)</td><td><b>Luxembourg nationals only</b>, aged 18+</td><td>5 years</td></tr>
  <tr><td>Communal (municipal)</td><td>Luxembourgers <b>and foreign residents</b> (EU and non-EU) aged 18+ who register</td><td>6 years</td></tr>
  <tr><td>European Parliament</td><td>Luxembourgers and <b>EU citizens</b> living in Luxembourg who register</td><td>5 years</td></tr>
  <tr><td>Referendum (national)</td><td>Luxembourg voters</td><td>When organised</td></tr>
</table>
<ul>
  <li><b>Voting age: 18.</b> It was lowered from 21 to 18 in 1972. A 2015 referendum on voting at 16 was rejected.</li>
  <li><b>Voting is compulsory</b> for everyone on the electoral rolls. Foreigners who register voluntarily also have to vote once they are registered.</li>
  <li><b>Universal suffrage</b> for men and women was introduced in <b>1919</b>.</li>
  <li>Since 2023, foreign residents can register for communal elections <b>with no minimum residence period</b>.</li>
</ul>

<h3>Direct democracy</h3>
<ul>
  <li><b>Referendum:</b> the Constitution and the law provide for consultation of voters. Examples include the 2005 referendum on the European Constitutional Treaty (yes, about 56.5%) and the 2015 referendum (three questions, all rejected).</li>
  <li><b>Citizens' legislative initiative</b> (new in 2023): a reasoned proposal by <b>125 voters</b>, supported by at least <b>12,500 voters</b>, must be examined by the Chamber.</li>
  <li><b>Petitions</b> to the Chamber of Deputies (see the previous lesson).</li>
</ul>

<h3>Citizens' duties</h3>
<ul>
  <li>Respect the Constitution and the laws.</li>
  <li><b>Vote</b> (compulsory once on the electoral roll).</li>
  <li>Pay taxes and social contributions.</li>
  <li>Send children to school (<b>compulsory schooling</b>).</li>
  <li>Luxembourg has <b>no compulsory military service</b>. It was abolished in 1967, and the army is made up of volunteers.</li>
</ul>
`,
      facts: [
        ['Current nationality law', 'Law of 8 March 2017'],
        ['Since when is dual/multiple nationality allowed?', '1 January 2009'],
        ['Residence needed for naturalisation', '5 years (last year uninterrupted)'],
        ['Required Luxembourgish levels', 'A2 speaking, B1 listening'],
        ['Who votes in legislative elections?', 'Only Luxembourg nationals aged 18+'],
        ['Can foreigners vote in communal elections?', 'Yes, all foreign residents 18+ who register'],
        ['Is voting compulsory?', 'Yes, for everyone registered on the electoral rolls'],
        ['Year of universal suffrage (incl. women)', '1919'],
        ['Citizens\' legislative initiative', '125 initiators + 12,500 supporting voters'],
        ['Compulsory military service?', 'No. Abolished in 1967; the army is voluntary']
      ]
    },
    {
      id: 'r5',
      title: 'Protecting your rights & living together',
      minutes: 5,
      html: `
<p class="lead">Rights only matter if they can be <b>defended</b>. Luxembourg has courts and several independent bodies that help people do this.</p>

<h3>Independent guardians</h3>
<ul>
  <li><b>The Ombudsman (<i>Médiateur</i>)</b>: helps people in disputes with <b>State or communal administrations</b>. The office is attached to the Chamber of Deputies, and the service is <b>free</b>.</li>
  <li><b>Ombudsman for children and young people</b> (<b>OKAJU</b>): defends the rights of children.</li>
  <li><b>Consultative Commission on Human Rights</b> (<b>CCDH</b>): advises the government on human rights.</li>
  <li><b>Centre for Equal Treatment</b> (<b>CET</b>): fights discrimination.</li>
  <li><b>National Commission for Data Protection</b> (<b>CNPD</b>): protects personal data (GDPR).</li>
</ul>

<h3>The courts</h3>
<ul>
  <li>Courts are <b>independent</b>. You can go to court to have your rights respected.</li>
  <li>The <b>Constitutional Court</b> checks whether laws comply with the Constitution. Questions reach it from other courts; citizens cannot go to it directly.</li>
  <li>Once national remedies are exhausted, you can apply to the <b>European Court of Human Rights</b> in Strasbourg.</li>
  <li>People with low incomes can get <b>legal aid</b> (<i>assistance judiciaire</i>).</li>
</ul>

<h3>Living together: integration</h3>
<ul>
  <li>Luxembourg has <b>about 680,000 inhabitants</b>, and close to <b>half are foreign nationals</b>, from over 170 nationalities. The Portuguese are the largest foreign community.</li>
  <li>The <b>Law of 23 August 2023 on intercultural living together</b> created the <b>Citizens' Pact</b> (<i>Pacte citoyen</i>) for anyone living or working in Luxembourg. It replaced the old Welcome and Integration Contract (CAI).</li>
  <li>Every commune has a <b>communal commission for intercultural living together</b>.</li>
</ul>
<div class="callout tip">The "Vivre ensemble" course exists to help residents understand their rights, the institutions and the country's history, so they can play a full part as citizens.</div>
`,
      facts: [
        ['Who helps you with a dispute against an administration?', 'The Ombudsman (Médiateur), attached to the Chamber'],
        ['OKAJU', 'Ombudsman for children and young people'],
        ['CCDH', 'Consultative Commission on Human Rights'],
        ['CET', 'Centre for Equal Treatment (anti-discrimination)'],
        ['CNPD', 'National Commission for Data Protection'],
        ['Can a citizen go directly to the Constitutional Court?', 'No, only via a question referred by a court'],
        ['Approx. share of foreign residents', 'Close to half the population (~47%)'],
        ['2023 law creating the Citizens\' Pact', 'Law of 23 August 2023 on intercultural living together']
      ]
    }
  ],
  questions: [
    // r1 Constitution
    { l: 'r1', q: 'When did Luxembourg\'s revised Constitution enter into force?', o: ['1 July 2023', '17 October 1868', '1 January 2000', '23 June 2019'], e: 'The thoroughly revised Constitution entered into force on 1 July 2023. Its base text is from 17 October 1868.' },
    { l: 'r1', q: 'What is the political system of Luxembourg?', o: ['A parliamentary democracy in the form of a constitutional monarchy', 'A presidential republic', 'An absolute monarchy', 'A federal state'], e: 'Luxembourg is a parliamentary democracy organised as a constitutional monarchy. The crown passes through the House of Nassau.' },
    { l: 'r1', q: 'According to the Constitution, sovereignty resides in…', o: ['the Nation', 'the Grand Duke', 'the Government', 'the Council of State'], e: 'Sovereignty resides in the Nation, from which all the powers of the State come.' },
    { l: 'r1', q: 'Which text is at the top of the Luxembourg hierarchy of norms?', o: ['The Constitution', 'A grand-ducal regulation', 'A communal regulation', 'A ministerial regulation'], e: 'The Constitution is the highest norm. Treaties, laws and then regulations must respect it.' },
    { l: 'r1', q: 'Under what condition can a fundamental right be limited?', o: ['Only by a law that respects the essence of the right and is proportionate', 'By a simple decision of a minister', 'By any communal regulation', 'Never, under any circumstances'], e: 'The common provisions of the Constitution allow limitations only by law, respecting the essence of the right and the principle of proportionality.' },
    { l: 'r1', q: 'Where are Luxembourg laws officially published?', o: ['In the Journal officiel (legilux.lu)', 'In the daily newspapers', 'On the website of the Grand Ducal Court', 'In the communal bulletin'], e: 'Laws are published in the Journal officiel du Grand-Duché de Luxembourg (formerly the Mémorial), available on legilux.lu. Only once published can they be enforced.' },
    { l: 'r1', q: 'Which court applies the European Convention on Human Rights?', o: ['The European Court of Human Rights in Strasbourg', 'The Court of Justice of the EU in Luxembourg', 'The International Court of Justice in The Hague', 'The Luxembourg Constitutional Court'], e: 'The European Court of Human Rights (Council of Europe) sits in Strasbourg. The Court of Justice of the EU in Luxembourg applies EU law, including the EU Charter.' },
    { l: 'r1', q: 'What distinguishes an "objective of constitutional value" from a fundamental right?', o: ['It is a goal the State must pursue, not an individual right enforceable in court', 'It is more important than a fundamental right', 'It only applies to foreigners', 'It can only be invoked before the European courts'], e: 'Objectives of constitutional value (housing, environment, animal welfare, culture…) guide State action. They are not individual rights you can directly enforce before a judge.' },
    { l: 'r1', q: 'Which of these is an objective of constitutional value in the 2023 Constitution?', o: ['Protection of the environment and the climate', 'Freedom of the press', 'Inviolability of the home', 'The right to strike'], e: 'Environment/climate protection, housing, animal welfare, culture and research are objectives. The other options are rights and public freedoms.' },
    { tf: true, l: 'r1', q: 'Luxembourg was a founding member of the Council of Europe (1949).', a: true, e: 'True. Luxembourg is one of the 10 founding states of the Council of Europe (London, 5 May 1949).' },
    { tf: true, l: 'r1', q: 'The European Convention on Human Rights is an instrument of the European Union.', a: false, e: 'False. The ECHR belongs to the Council of Europe. The EU has its own Charter of Fundamental Rights.' },
    // r2 dignity & equality
    { l: 'r2', q: 'Which value does the Constitution describe as "inviolable" and at the basis of all rights?', o: ['Human dignity', 'Private property', 'Freedom of trade', 'National sovereignty'], e: 'Human dignity is inviolable. It is the foundation of fundamental rights.' },
    { l: 'r2', q: 'What is the status of the death penalty in Luxembourg?', o: ['It is prohibited (abolished in 1979)', 'It exists for war crimes', 'It was abolished in 2009', 'It can be decided by referendum'], e: 'Luxembourg abolished the death penalty in 1979, and the Constitution prohibits it.' },
    { l: 'r2', q: 'What does the Constitution say about women and men?', o: ['They are equal in rights and duties, and the State actively promotes equality', 'Equality applies only in the workplace', 'Equality applies only to Luxembourg nationals', 'Nothing. It is regulated only by EU law'], e: 'Women and men are equal in rights and duties. The State must actively promote the removal of obstacles to equality.' },
    { l: 'r2', q: '"No punishment without a law" means that…', o: ['A penalty can only be applied under a law existing at the time of the act', 'Judges can invent new punishments', 'Laws only apply to Luxembourg nationals', 'Minor offences are not punished'], e: 'The principle of legality (nulla poena sine lege): only a pre-existing law can define an offence and its penalty.' },
    { l: 'r2', q: 'Under which conditions may the State take a person\'s property?', o: ['For public utility, in cases set by law and with fair compensation', 'Whenever a minister decides', 'Only during wartime, without compensation', 'Never'], e: 'Expropriation is only allowed for public utility, in the cases and manner set by law, and with fair compensation.' },
    { l: 'r2', q: 'The police want to search a home. Which statement is correct?', o: ['A search is only possible in the cases and forms provided by law', 'It is always allowed without conditions', 'It requires the authorisation of the mayor only', 'It is never allowed'], e: 'The home is inviolable. A search may only take place in the cases and forms foreseen by law.' },
    { l: 'r2', q: 'What principle guides every decision that concerns a child?', o: ['The best interest of the child', 'The interest of the parents', 'The interest of the State', 'The interest of the school'], e: 'The Constitution protects children\'s rights. The best interest of the child is the primary consideration.' },
    { l: 'r2', q: 'Which of the following is a fundamental right protected by the Constitution?', o: ['Respect for private and family life', 'The right to a free car', 'The right to choose one\'s judge', 'The right not to pay taxes'], e: 'Private and family life, personal data and secrecy of correspondence are protected. Nobody may be removed from the judge assigned to them by law.' },
    { tf: true, l: 'r2', q: 'Torture and inhuman or degrading treatment are prohibited in Luxembourg.', a: true, e: 'True. The prohibition of torture is an absolute fundamental right.' },
    { tf: true, l: 'r2', q: 'A person accused of an offence is presumed guilty until they prove their innocence.', a: false, e: 'False. Everyone is presumed innocent until proven guilty, and everyone has the right to a fair trial.' },
    { l: 'r2', q: 'In which year did Luxembourg open marriage to same-sex couples?', o: ['2015', '1999', '2009', '2023'], e: 'Marriage equality (and adoption) came into force in 2015. Euthanasia was legalised in 2009.' },
    // r3 public freedoms
    { l: 'r3', q: 'According to the Constitution, censorship…', o: ['can never be established', 'is allowed in times of crisis', 'is decided by the Council of State', 'applies to foreign newspapers'], e: 'Freedom of expression and of the press is guaranteed, and censorship can never be established. Abuses can be punished afterwards.' },
    { l: 'r3', q: 'Under what conditions do people have the right to assemble?', o: ['Peacefully and without weapons', 'Only with the written permission of the Grand Duke', 'Only in groups of fewer than 10', 'Only on national holidays'], e: 'Everyone has the right to assemble peacefully and unarmed, without prior authorisation. Open-air gatherings remain subject to police laws.' },
    { l: 'r3', q: 'Do you need permission from the State to create an association?', o: ['No, the right of association needs no prior authorisation', 'Yes, from the Prime Minister', 'Yes, from the Council of State', 'Only if more than 3 members are foreigners'], e: 'The right of association is guaranteed and cannot be made subject to prior authorisation.' },
    { l: 'r3', q: 'Which statement about religion in Luxembourg is correct?', o: ['No one can be forced to take part in religious rites', 'Catholicism is the compulsory state religion', 'Religion classes are compulsory for all pupils', 'Only Christian faiths are allowed'], e: 'Freedom of religion includes freedom not to believe. No one can be forced to take part in a worship. The State is neutral.' },
    { l: 'r3', q: 'Which school subject replaced religious and moral education in public schools?', o: ['"Vie et société" (Life and Society)', '"Éducation civique"', '"Histoire des religions"', '"Philosophie"'], e: 'Since 2016/2017, the common course "Vie et société" has been taught to all pupils.' },
    { l: 'r3', q: 'In 2015, the State signed new agreements with…', o: ['the recognised religious communities (conventions)', 'the European Union on taxes', 'the trade unions on wages', 'neighbouring countries on borders'], e: 'The 2015 conventions reorganised relations between the State and recognised faiths (Catholic, Protestant, Jewish, Orthodox, Anglican, Muslim…).' },
    { l: 'r3', q: 'How many signatures does a public petition to the Chamber of Deputies need to trigger a public debate?', o: ['4,500', '500', '25,000', '60'], e: 'A public petition reaching 4,500 signatures (within the time limit) leads to a public debate in the Chamber.' },
    { l: 'r3', q: 'What is the national language of Luxembourg?', o: ['Luxembourgish', 'French', 'German', 'All three equally'], e: 'Under the Language Law of 24 February 1984 and the Constitution, Luxembourgish is the national language.' },
    { l: 'r3', q: 'In which language are Luxembourg laws written (legislative language)?', o: ['French', 'Luxembourgish', 'German', 'English'], e: 'French is the language of legislation. Only the French text of laws is authentic.' },
    { l: 'r3', q: 'Which languages can be used in administrative and judicial matters?', o: ['French, German and Luxembourgish', 'Only French', 'Only Luxembourgish', 'French and English'], e: 'The 1984 Language Law recognises French, German and Luxembourgish as administrative and judicial languages.' },
    { l: 'r3', q: 'In what year was the Language Law adopted?', o: ['1984', '1839', '1919', '2023'], e: 'The Law of 24 February 1984 on the use of languages made Luxembourgish the national language.' },
    { l: 'r3', q: 'You write to a ministry in German. In principle, the administration should reply…', o: ['as far as possible in German', 'only in French', 'only in Luxembourgish', 'in English'], e: 'The 1984 law says the administration should answer, as far as possible, in the language (FR/DE/LU) used by the citizen.' },
    { tf: true, l: 'r3', q: 'The right to strike and trade union freedom are guaranteed in Luxembourg.', a: true, e: 'True. Trade union freedom and the right to strike are guaranteed, within the limits of the law.' },
    { tf: true, l: 'r3', q: 'Public education in Luxembourg is free of charge.', a: true, e: 'True. The State organises free public education, and schooling is compulsory.' },
    // r4 nationality & political rights
    { l: 'r4', q: 'Since when has Luxembourg accepted multiple (dual) nationality?', o: ['1 January 2009', '1 January 1984', '1 July 2023', '1 January 1999'], e: 'Multiple nationality has been allowed since 1 January 2009. The current nationality law dates from 8 March 2017.' },
    { l: 'r4', q: 'How many years of legal residence are required to apply for naturalisation?', o: ['5 years', '2 years', '10 years', '20 years'], e: '5 years of legal residence, the last year without interruption, plus the language test and the "Vivre ensemble" certificate.' },
    { l: 'r4', q: 'How can you obtain the "Vivre ensemble au Grand-Duché de Luxembourg" certificate?', o: ['By attending the 24-hour course or passing the exam', 'Only by passing a written essay', 'By living 3 years in Luxembourg', 'By passing the Luxembourgish language test'], e: 'The certificate proves either attendance at the 24-hour course or success in the exam without the course.' },
    { l: 'r4', q: 'Who may vote in elections for the Chamber of Deputies?', o: ['Only Luxembourg nationals aged 18 or over', 'All residents aged 18 or over', 'EU citizens and Luxembourgers', 'Luxembourgers aged 16 or over'], e: 'Legislative elections are reserved for Luxembourg nationals aged 18+. Foreigners can vote in communal (and EU citizens in European) elections.' },
    { l: 'r4', q: 'In which elections can a non-EU foreign resident vote?', o: ['Communal elections', 'Legislative elections', 'European elections', 'None'], e: 'All foreign residents aged 18+ (EU and non-EU) can register to vote in communal elections.' },
    { l: 'r4', q: 'What is the minimum voting age in Luxembourg?', o: ['18', '16', '21', '25'], e: 'The voting age is 18. It was lowered from 21 in 1972, and a 2015 proposal to allow voting at 16 was rejected by referendum.' },
    { l: 'r4', q: 'Is voting compulsory in Luxembourg?', o: ['Yes, for all voters registered on the electoral rolls', 'No, it is always voluntary', 'Only for people over 60', 'Only in European elections'], e: 'Voting is compulsory for registered voters. Foreigners who register for communal/European elections must also vote.' },
    { l: 'r4', q: 'When did women obtain the right to vote in Luxembourg?', o: ['1919', '1945', '1972', '1868'], e: 'The 1919 constitutional revision introduced universal suffrage for men and women.' },
    { l: 'r4', q: 'What did the 2023 Constitution introduce to give citizens a direct role in making laws?', o: ['The citizens\' legislative initiative', 'Election of the Prime Minister by the people', 'Abolition of the Chamber of Deputies', 'Election of judges by citizens'], e: 'A reasoned proposal by 125 voters, supported by at least 12,500 voters, must be examined by the Chamber of Deputies.' },
    { l: 'r4', q: 'What was the result of the 2015 referendum (voting at 16, foreigners\' right to vote in national elections, term limits for ministers)?', o: ['All three questions were rejected', 'All three questions were approved', 'Only voting at 16 was approved', 'The referendum was cancelled'], e: 'On 7 June 2015, voters clearly rejected all three proposals (around 70–80% "no").' },
    { tf: true, l: 'r4', q: 'Military service is compulsory for young Luxembourgers.', a: false, e: 'False. Compulsory military service was abolished in 1967. The Luxembourg Army is made up of volunteers.' },
    { tf: true, l: 'r4', q: 'Since 2023, foreign residents no longer need a minimum period of residence to register for communal elections.', a: true, e: 'True. The 2023 reform abolished the residence condition for registering on the communal electoral rolls.' },
    // r5 protection & living together
    { l: 'r5', q: 'You have a dispute with a State administration. Which free, independent body can help you?', o: ['The Ombudsman (Médiateur)', 'The Council of State', 'The Court of Auditors', 'The Chamber of Commerce'], e: 'The Ombudsman (Médiateur), attached to the Chamber of Deputies, helps citizens free of charge in disputes with administrations.' },
    { l: 'r5', q: 'Which body specifically defends the rights of children in Luxembourg?', o: ['OKAJU (Ombudsman for children and young people)', 'CNPD', 'The Chamber of Trades', 'STATEC'], e: 'The OKAJU (Ombudsman fir Kanner a Jugendlecher) defends children\'s rights.' },
    { l: 'r5', q: 'Which body fights discrimination in Luxembourg?', o: ['The Centre for Equal Treatment (CET)', 'The Court of Auditors', 'The Economic and Social Council', 'The Council of State'], e: 'The Centre for Equal Treatment (Centre pour l\'égalité de traitement) promotes equal treatment and helps victims of discrimination.' },
    { l: 'r5', q: 'Which authority supervises the protection of personal data (GDPR)?', o: ['CNPD', 'CCDH', 'OKAJU', 'ILR'], e: 'The National Commission for Data Protection (CNPD) supervises compliance with data protection rules.' },
    { l: 'r5', q: 'After exhausting national remedies, where can a person complain about a violation of the ECHR?', o: ['European Court of Human Rights (Strasbourg)', 'Constitutional Court of Luxembourg', 'European Commission (Brussels)', 'United Nations (New York)'], e: 'Individual applications under the European Convention on Human Rights go to the Strasbourg court once domestic remedies are exhausted.' },
    { l: 'r5', q: 'Approximately what share of Luxembourg\'s residents are foreign nationals?', o: ['Close to half (≈47%)', 'About 10%', 'About 25%', 'About 75%'], e: 'Close to half the population holds a foreign nationality. The Portuguese are the largest foreign community.' },
    { l: 'r5', q: 'What did the Law of 23 August 2023 on intercultural living together create?', o: ['The Citizens\' Pact (Pacte citoyen)', 'The Constitutional Court', 'Compulsory voting for foreigners', 'The 1984 language rules'], e: 'The 2023 law created the Citizens\' Pact for intercultural living together, open to everyone who lives or works in Luxembourg, replacing the CAI.' }
  ]
});
