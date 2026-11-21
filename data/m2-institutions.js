/* Module 2 — State and communal institutions (≈20 exam questions, 12 h of course) */
VE.addModule({
  id: 'institutions',
  num: 2,
  title: 'State & Communal Institutions',
  fr: 'Les institutions étatiques et communales',
  subtitle: 'Grand Duke, Chamber, Government, Council of State, justice, communes',
  examQuestions: 20,
  hours: 12,
  accent: 'blue',
  icon: 'columns',
  lessons: [
    {
      id: 'i1',
      title: 'The State & separation of powers',
      minutes: 5,
      html: `
<p class="lead">Luxembourg has been an <b>independent sovereign State since the Treaty of London of 19 April 1839</b>. It is a <b>parliamentary democracy in the form of a constitutional monarchy</b>. The crown passes through the <b>House of Nassau</b>.</p>

<div class="stats">
  <div><b>2,586 km²</b><span>area</span></div>
  <div><b>≈680,000</b><span>inhabitants</span></div>
  <div><b>12</b><span>cantons</span></div>
  <div><b>100</b><span>communes</span></div>
  <div><b>4</b><span>electoral constituencies</span></div>
  <div><b>3</b><span>neighbours: BE · DE · FR</span></div>
</div>

<h3>Three powers, flexibly separated</h3>
<table class="tbl">
  <tr><th>Power</th><th>Held by</th></tr>
  <tr><td><b>Legislative</b> (makes laws)</td><td>The <b>Chamber of Deputies</b> votes the laws. The <b>Government</b> and the <b>Council of State</b> take part in the procedure.</td></tr>
  <tr><td><b>Executive</b> (applies laws)</td><td>The <b>Grand Duke</b> together with the <b>Government</b></td></tr>
  <tr><td><b>Judicial</b> (judges disputes)</td><td>The <b>courts and tribunals</b>, which are fully independent</td></tr>
</table>
<p>As in every parliamentary democracy, the separation of powers is <b>flexible</b>: the legislative and executive powers are closely linked. The government comes from the parliamentary majority and answers to it. Only the <b>judicial power is completely independent</b>.</p>

<h3>Territorial organisation</h3>
<ul>
  <li>The country has no provinces or regions. The <b>only decentralised political level is the commune</b> (municipality).</li>
  <li>There are <b>12 cantons</b>, which are used for elections and statistics. The 3 districts were abolished in 2015.</li>
  <li>The capital is <b>Luxembourg City</b>. It is also one of the seats of the European Union.</li>
</ul>
`,
      facts: [
        ['Independent since…', 'Treaty of London, 19 April 1839'],
        ['Form of State', 'Parliamentary democracy / constitutional monarchy'],
        ['Area', '2,586 km²'],
        ['Number of communes', '100 (since 2023)'],
        ['Number of cantons', '12'],
        ['Which power is completely independent?', 'The judicial power'],
        ['Only decentralised political level', 'The commune']
      ]
    },
    {
      id: 'i2',
      title: 'The Grand Duke',
      minutes: 7,
      html: `
<p class="lead">The Grand Duke is the <b>Head of State</b>. He represents the State and is the <b>symbol of national unity and independence</b>. He exercises the executive power <b>together with the Government</b>.</p>

<div class="callout"><b>Since 3 October 2025</b>, the Head of State has been <b>Grand Duke Guillaume</b>, after Grand Duke Henri abdicated (Henri reigned 2000–2025). The Grand Duchess is <b>Stéphanie</b>, and the heir is their eldest son, <b>Prince Charles</b> (born 2020).</div>

<h3>Inviolability and countersignature</h3>
<ul>
  <li><b>The person of the Grand Duke is inviolable.</b> He cannot be prosecuted and bears <b>no political responsibility</b>.</li>
  <li>The <b>ministers carry the responsibility</b> instead. Any measure the Grand Duke takes under his constitutional powers must be <b>countersigned by a member of the Government</b>, who takes full responsibility for it.</li>
</ul>

<h3>His powers (always exercised with the Government)</h3>
<ul>
  <li><b>Promulgates the laws</b>: he certifies the text and orders its publication. Since the <b>2009 revision</b>, he no longer has to <i>approve</i> (sanction) laws. The change followed Grand Duke Henri's objection of conscience to the euthanasia law.</li>
  <li>Adopts the <b>regulations</b> needed to apply laws (grand-ducal regulations).</li>
  <li><b>Appoints the Prime Minister and the members of the Government</b>.</li>
  <li>Can <b>dissolve the Chamber of Deputies</b>. New elections must then be held within <b>3 months</b>. This happened in 2013.</li>
  <li><b>Represents the State abroad</b>, and concludes and signs <b>treaties</b>, which the Chamber must approve by law.</li>
  <li>Is the formal head of the <b>Army</b>, under the Government's responsibility.</li>
  <li>Has the <b>right of pardon</b>, appoints to public offices, and awards honours.</li>
</ul>

<h3>Succession</h3>
<ul>
  <li>The crown is <b>hereditary in the House of Nassau</b> (the Nassau-Weilburg line, then Bourbon-Parma-Nassau).</li>
  <li>Since a 2010/2011 reform, now in the Constitution, the <b>eldest child inherits, whether a girl or a boy</b> (equal primogeniture).</li>
  <li>On accession, the Grand Duke takes the <b>constitutional oath before the Chamber of Deputies</b>.</li>
  <li>The Grand Duke can delegate his powers to a <b>Lieutenant-Representative</b>. Prince Guillaume held this role in 2024–2025.</li>
</ul>
`,
      facts: [
        ['Current Head of State', 'Grand Duke Guillaume (since 3 October 2025)'],
        ['Previous Grand Duke', 'Henri (2000–2025)'],
        ['Heir to the throne', 'Prince Charles (born 2020)'],
        ['Who is politically responsible for the Grand Duke\'s acts?', 'The minister who countersigns them'],
        ['What does "inviolable" mean here?', 'He cannot be prosecuted; no political responsibility'],
        ['What changed in 2009?', 'The Grand Duke only promulgates laws, no longer sanctions (approves) them'],
        ['Deadline for elections after dissolution', '3 months'],
        ['Rule of succession', 'Eldest child regardless of gender'],
        ['Where does the new Grand Duke swear the oath?', 'Before the Chamber of Deputies']
      ]
    },
    {
      id: 'i3',
      title: 'The Chamber of Deputies',
      minutes: 8,
      html: `
<p class="lead">The <b>Chamber of Deputies</b> (<i>Chambre des Députés</i>, <i>Chamber</i>) is the national <b>parliament</b>. Luxembourg's parliament is <b>unicameral</b>: there is only one chamber. It represents the country.</p>

<h3>Composition</h3>
<ul>
  <li><b>60 deputies</b>, elected for <b>5 years</b> by direct universal suffrage, by secret ballot, with <b>proportional representation</b>.</li>
  <li><b>4 constituencies:</b>
    <table class="tbl">
      <tr><th>Constituency</th><th>Cantons</th><th>Seats</th></tr>
      <tr><td><b>South</b></td><td>Esch-sur-Alzette, Capellen</td><td><b>23</b></td></tr>
      <tr><td><b>Centre</b></td><td>Luxembourg, Mersch</td><td><b>21</b></td></tr>
      <tr><td><b>North</b></td><td>Diekirch, Redange, Wiltz, Clervaux, Vianden</td><td><b>9</b></td></tr>
      <tr><td><b>East</b></td><td>Grevenmacher, Remich, Echternach</td><td><b>7</b></td></tr>
    </table>
  </li>
  <li><b>How you vote:</b> you have as many votes as there are seats in your constituency. You can vote for a whole list (one box), or give individual votes to candidates on different lists (<b>panachage</b>), with up to 2 votes per candidate.</li>
  <li><b>Voters:</b> Luxembourg nationals aged 18+. <b>Voting is compulsory.</b> <b>Candidates:</b> Luxembourgers aged 18+ who live in Luxembourg.</li>
  <li>Being a deputy is <b>incompatible</b> with being a member of the Government, a judge or a member of the Council of State.</li>
  <li>Deputies enjoy <b>parliamentary immunity</b> for opinions and votes expressed in office.</li>
  <li>A <b>political group</b> needs at least <b>5 deputies</b>.</li>
</ul>

<h3>Main functions</h3>
<ol>
  <li><b>Votes laws.</b> Deputies can also propose laws themselves (<i>propositions de loi</i>).</li>
  <li><b>Votes the State budget</b> every year and approves the State accounts.</li>
  <li><b>Controls the Government</b> through parliamentary questions, interpellations, motions, resolutions and committees of inquiry. It can pass a <b>motion of censure</b> or refuse a <b>vote of confidence</b>, which forces the Government to resign.</li>
  <li><b>Approves international treaties</b> by law.</li>
  <li>Proposes candidates for the Council of State and the Court of Auditors, and <b>appoints the Ombudsman</b> (<i>Médiateur</i>).</li>
  <li>Receives <b>petitions</b> from citizens.</li>
</ol>

<h3>The 2023 elections</h3>
<p>Last legislative elections: <b>8 October 2023</b>. Next scheduled: <b>2028</b>.</p>
<div class="seats">
  <span style="--c:#f39200;--n:21">CSV 21</span>
  <span style="--c:#0072bc;--n:14">DP 14</span>
  <span style="--c:#e30613;--n:11">LSAP 11</span>
  <span style="--c:#00a0e1;--n:5">ADR 5</span>
  <span style="--c:#6ab023;--n:4">déi gréng 4</span>
  <span style="--c:#4d4d4d;--n:3">Piraten 3</span>
  <span style="--c:#c4001a;--n:2">déi Lénk 2</span>
</div>
<p>The President of the Chamber is <b>Claude Wiseler</b> (CSV). The Chamber sits in Luxembourg City, near the Grand Ducal Palace, and its sessions are <b>public</b>. The ordinary session opens in <b>October</b>.</p>
`,
      facts: [
        ['Number of deputies', '60'],
        ['Term of the Chamber', '5 years'],
        ['Number of electoral constituencies', '4: South, Centre, North, East'],
        ['Seats: South / Centre / North / East', '23 / 21 / 9 / 7'],
        ['Electoral system', 'Proportional representation, with panachage possible'],
        ['Minimum size of a political group', '5 deputies'],
        ['Date of last legislative elections', '8 October 2023'],
        ['Largest party in 2023', 'CSV (21 seats)'],
        ['President of the Chamber', 'Claude Wiseler'],
        ['Who appoints the Ombudsman?', 'The Chamber of Deputies']
      ]
    },
    {
      id: 'i4',
      title: 'The Government',
      minutes: 6,
      html: `
<p class="lead">The <b>Government</b> runs the country day to day. It applies the laws, prepares bills and the budget, and directs the administrations.</p>

<h3>Composition</h3>
<ul>
  <li>A <b>Prime Minister</b> (<i>Premier ministre</i>, Minister of State), one or more <b>Deputy Prime Ministers</b>, <b>ministers</b>, and sometimes <b>ministers delegate</b> or <b>secretaries of state</b>.</li>
  <li>Ministers must be <b>Luxembourg nationals</b>. Being a minister is incompatible with being a deputy, a councillor of State or a communal councillor.</li>
  <li>A minister usually holds <b>several portfolios</b>.</li>
</ul>

<h3>How a Government is formed</h3>
<ol>
  <li><b>Elections.</b> Usually no party wins an absolute majority (31 seats), so a <b>coalition</b> is needed.</li>
  <li>The Grand Duke consults the parties and appoints an <b>informateur</b>, then a <b>formateur</b>, normally the leader of the strongest party.</li>
  <li>The parties negotiate a <b>coalition agreement</b>.</li>
  <li>The Grand Duke <b>appoints</b> the Prime Minister and the ministers, who <b>take the oath</b> before him.</li>
  <li>The Prime Minister presents the government programme to the Chamber, which holds a <b>vote of confidence</b>.</li>
</ol>

<div class="callout"><b>Today:</b> the <b>CSV–DP coalition</b> led by Prime Minister <b>Luc Frieden</b> (CSV) has governed since <b>17 November 2023</b>. <b>Xavier Bettel</b> (DP), Prime Minister from 2013 to 2023, is Deputy Prime Minister and Minister of Foreign Affairs.</div>

<h3>Working methods and responsibility</h3>
<ul>
  <li>The ministers meet collectively in the <b>Government Council</b> (<i>Conseil de gouvernement</i>), usually once a week.</li>
  <li>The Government has the right of <b>initiative</b>: it drafts bills (<i>projets de loi</i>), most of which become laws.</li>
  <li>Ministers are <b>politically responsible to the Chamber</b>. If the Chamber withdraws its confidence, the Government must resign.</li>
</ul>

<h3>Recent Prime Ministers</h3>
<table class="tbl">
  <tr><td>Jean-Claude Juncker (CSV)</td><td>1995–2013</td></tr>
  <tr><td>Xavier Bettel (DP)</td><td>2013–2023</td></tr>
  <tr><td>Luc Frieden (CSV)</td><td>since 2023</td></tr>
</table>
`,
      facts: [
        ['Current Prime Minister', 'Luc Frieden (CSV), since 17 November 2023'],
        ['Current coalition', 'CSV–DP'],
        ['Deputy PM & Foreign Minister (2023–)', 'Xavier Bettel (DP)'],
        ['Absolute majority in the Chamber', '31 of 60 seats'],
        ['Who appoints the ministers?', 'The Grand Duke'],
        ['Nationality required for ministers', 'Luxembourgish'],
        ['To whom are ministers responsible?', 'To the Chamber of Deputies'],
        ['A government bill is called…', 'Projet de loi']
      ]
    },
    {
      id: 'i5',
      title: 'How a law is made & the Council of State',
      minutes: 7,
      html: `
<p class="lead">Luxembourg has only one parliamentary chamber, so the <b>Council of State</b> provides a "second look" at every law.</p>

<h3>The legislative procedure</h3>
<div class="steps">
  <div><b>1. Initiative</b><span><b>Projet de loi</b> (bill by the Government) or <b>proposition de loi</b> (bill by one or more deputies). Since 2023, there is also the <b>citizens' initiative</b>.</span></div>
  <div><b>2. Opinions</b><span>The <b>Council of State</b> gives its opinion. The <b>professional chambers</b> concerned give theirs.</span></div>
  <div><b>3. Committee</b><span>A <b>parliamentary committee</b> examines the text, proposes amendments and writes a report.</span></div>
  <div><b>4. Vote</b><span>Plenary debate, then a vote article by article and on the whole text.</span></div>
  <div><b>5. Second vote</b><span>A <b>second constitutional vote</b> must be held at least <b>3 months</b> later, <b>unless</b> the Chamber and the Council of State agree to waive it, which happens in most cases.</span></div>
  <div><b>6. Promulgation</b><span>The <b>Grand Duke promulgates</b> the law.</span></div>
  <div><b>7. Publication</b><span>The law is published in the <b>Journal officiel</b> (legilux) and enters into force.</span></div>
</div>

<h3>The Council of State (<i>Conseil d'État</i>)</h3>
<ul>
  <li><b>21 councillors</b>, at least <b>11</b> of whom hold a law degree.</li>
  <li>Appointed by the <b>Grand Duke</b> on proposal, in turn, by the Government, the Chamber or the Council of State itself, for a term of <b>12 years</b>.</li>
  <li>Requirements: Luxembourg nationality, age 30 or over, residence in Luxembourg.</li>
  <li>Role: gives <b>opinions on all bills</b> and draft grand-ducal regulations. It checks that they comply with the Constitution, international treaties and the rule of law.</li>
  <li>It is <b>advisory</b>: it persuades, it does not decide. However, by refusing to waive the second vote, it imposes a <b>3-month suspensive veto</b>.</li>
  <li>Until <b>1996</b> it was also the supreme administrative court. That role passed to the new administrative courts.</li>
</ul>
<div class="callout tip"><b>Think of it this way:</b> Chamber = votes. Council of State = advises and can delay by 3 months. Grand Duke = promulgates. Journal officiel = publishes.</div>
`,
      facts: [
        ['Bill introduced by the Government', 'Projet de loi'],
        ['Bill introduced by deputies', 'Proposition de loi'],
        ['Members of the Council of State', '21 councillors'],
        ['Term of a councillor of State', '12 years'],
        ['Second constitutional vote: delay', 'At least 3 months after the first vote'],
        ['Who can waive the second vote?', 'The Council of State, with the Chamber\'s agreement'],
        ['Nature of the Council of State\'s role', 'Advisory (plus a suspensive veto)'],
        ['Until when was the Council of State also a court?', '1996']
      ]
    },
    {
      id: 'i6',
      title: 'Justice & the courts',
      minutes: 7,
      html: `
<p class="lead">Justice is exercised by <b>independent courts and tribunals</b>. Luxembourg has <b>two orders of jurisdiction</b>, judicial and administrative, plus a <b>Constitutional Court</b>.</p>

<h3>Judicial order (civil, commercial, criminal cases)</h3>
<div class="ladder">
  <div><b>Superior Court of Justice</b> (Luxembourg City): <b>Court of Appeal</b> + <b>Court of Cassation</b></div>
  <div><b>2 District Courts</b> (<i>tribunaux d'arrondissement</i>): <b>Luxembourg</b> and <b>Diekirch</b></div>
  <div><b>3 Justices of the Peace</b> (<i>justices de paix</i>): <b>Luxembourg, Esch-sur-Alzette, Diekirch</b></div>
</div>
<ul>
  <li><b>Justices of the peace</b> handle small civil and commercial cases (up to €10,000), tenancy and wage matters. In criminal matters they act as <b>police courts</b> for minor offences.</li>
  <li><b>District courts</b> handle all other civil and commercial cases. In criminal matters they judge offences (<i>délits</i>) and crimes. Luxembourg has <b>no popular jury</b>: only professional judges sit.</li>
  <li>The <b>Court of Appeal</b> re-examines judgments. The <b>Court of Cassation</b> only checks that the <b>law was correctly applied</b>. It is not a third trial on the facts.</li>
  <li>Specialised courts include the labour courts and the social security courts.</li>
</ul>

<h3>Administrative order (disputes with the administration)</h3>
<ul>
  <li><b>Administrative Tribunal</b> (first instance) → <b>Administrative Court</b> (appeal). Both were created in <b>1996/1997</b>.</li>
  <li>Examples: a refused building permit, a residence permit, tax disputes.</li>
</ul>

<h3>Constitutional Court</h3>
<ul>
  <li><b>9 members</b>, sitting in Luxembourg.</li>
  <li>It rules on whether <b>laws comply with the Constitution</b> (except laws approving treaties).</li>
  <li>Cases come only through <b>preliminary questions</b> from other courts. <b>Citizens cannot apply to it directly.</b></li>
</ul>

<h3>Other key actors</h3>
<ul>
  <li><b>Public Prosecutor's Office</b> (<i>Ministère public</i> / <i>Parquet</i>): prosecutes offences and represents society before the courts.</li>
  <li><b>National Council of Justice</b> (<i>Conseil national de la justice</i>, since 2023): guarantees the independence of the judiciary and proposes the appointment of magistrates.</li>
  <li>Judges are appointed by the Grand Duke and cannot be removed (<b>irremovability</b>).</li>
</ul>
`,
      facts: [
        ['Two orders of jurisdiction', 'Judicial and administrative'],
        ['Seats of the 3 justices of the peace', 'Luxembourg, Esch-sur-Alzette, Diekirch'],
        ['Seats of the 2 district courts', 'Luxembourg and Diekirch'],
        ['Highest court of the judicial order', 'Superior Court of Justice (Court of Appeal + Court of Cassation)'],
        ['Administrative courts', 'Administrative Tribunal → Administrative Court'],
        ['Members of the Constitutional Court', '9'],
        ['Is there a popular jury in Luxembourg?', 'No, only professional judges'],
        ['Body guaranteeing judicial independence (2023)', 'National Council of Justice']
      ]
    },
    {
      id: 'i7',
      title: 'Advisory & control bodies',
      minutes: 5,
      html: `
<p class="lead">Several bodies <b>advise</b> the legislator or <b>control</b> the State. This reflects the Luxembourg tradition of <b>social dialogue</b>.</p>

<h3>Control</h3>
<ul>
  <li><b>Court of Auditors</b> (<i>Cour des comptes</i>): checks how <b>public money</b> is managed and reports to the Chamber of Deputies.</li>
  <li><b>Ombudsman</b> (<i>Médiateur</i>): appointed by the Chamber. Handles citizens' complaints against administrations.</li>
  <li><b>Budget execution control committee</b> of the Chamber, chaired by an <b>opposition</b> deputy.</li>
</ul>

<h3>The 5 professional chambers</h3>
<p>Every worker or company belongs to one, and its members elect it. Each chamber <b>gives opinions on bills</b> in its field and can make proposals to the Government.</p>
<div class="grid2">
  <div class="mini"><h4>Employers' side</h4><p>• Chamber of <b>Commerce</b><br>• Chamber of <b>Skilled Trades</b> (<i>Chambre des Métiers</i>)<br>• Chamber of <b>Agriculture</b></p></div>
  <div class="mini"><h4>Workers' side</h4><p>• Chamber of <b>Employees</b> (<i>Chambre des salariés</i>, CSL; since 2009)<br>• Chamber of <b>Civil Servants and Public Employees</b></p></div>
</div>
<p>Foreign workers are members too, and they <b>vote</b> in professional chamber elections.</p>

<h3>Social dialogue</h3>
<ul>
  <li><b>Economic and Social Council</b> (<b>CES</b>): advises on economic, financial and social matters, and represents employers, unions and the Government.</li>
  <li><b>Tripartite</b> (Government, employers, trade unions): created during the <b>steel crisis of the 1970s</b> (1977). It is the symbol of the "Luxembourg model" of consensus.</li>
  <li><b>Wage indexation</b>: salaries are automatically adjusted to inflation.</li>
</ul>
`,
      facts: [
        ['Body that controls the use of public money', 'Court of Auditors (Cour des comptes)'],
        ['Number of professional chambers', '5'],
        ['Professional chambers on the employers\' side', 'Commerce, Skilled Trades (Métiers), Agriculture'],
        ['Professional chambers on the workers\' side', 'Employees (CSL), Civil Servants & Public Employees'],
        ['What is the Tripartite?', 'Concertation between Government, employers and unions (since 1977)'],
        ['CES', 'Economic and Social Council']
      ]
    },
    {
      id: 'i8',
      title: 'The communes',
      minutes: 8,
      html: `
<p class="lead">The <b>commune</b> is the level of government closest to citizens and the only decentralised political level. Since <b>1 September 2023</b>, Luxembourg has <b>100 communes</b>.</p>

<h3>Communal autonomy</h3>
<ul>
  <li>Each commune is a <b>legal entity</b> with its own assets and its own revenue, such as local taxes and fees.</li>
  <li>It manages its <b>local interests</b> under the <b>supervision of the State</b>, exercised by the <b>Minister of Home Affairs</b>.</li>
</ul>

<h3>Communal bodies</h3>
<table class="tbl">
  <tr><th>Body</th><th>Role</th></tr>
  <tr><td><b>Communal council</b> (<i>conseil communal</i>)</td><td>Elected for <b>6 years</b>. The "local parliament": it votes the budget, regulations and taxes. It has 7 to 27 members depending on population.</td></tr>
  <tr><td><b>College of the mayor and aldermen</b> (<i>collège des bourgmestre et échevins</i>)</td><td>The <b>executive</b>: it manages daily affairs and applies the council's decisions.</td></tr>
  <tr><td><b>Mayor</b> (<i>bourgmestre</i>)</td><td>Chairs the council and the college. <b>Appointed by the Grand Duke</b> from among the elected councillors. Responsible for public order and the civil registry.</td></tr>
</table>

<h3>Communal elections</h3>
<ul>
  <li>Held every <b>6 years</b>. The last were on <b>11 June 2023</b>; the next are due in <b>2029</b>.</li>
  <li><b>Who votes:</b> Luxembourgers <b>and all foreign residents</b> aged 18+ who registered. Voting is compulsory once registered.</li>
  <li><b>Who can stand:</b> Luxembourgers and foreign residents who meet the legal conditions.</li>
  <li>Small communes use a <b>majority (relative) system</b>, voting for individual candidates. Larger communes use <b>proportional representation</b> with party lists.</li>
</ul>

<h3>What does your commune do?</h3>
<div class="chips">
  <span>Civil registry (births, marriages, deaths)</span><span>Population register</span><span>Fundamental (primary) schools & childcare</span><span>Water, sewage, waste</span><span>Local roads & lighting</span><span>Urban planning (PAG) & building permits</span><span>Social office</span><span>Sports, culture, associations</span><span>Electoral rolls</span><span>Integration of newcomers</span>
</div>
<p>Communes can join together in <b>communal syndicates</b> (<i>syndicats intercommunaux</i>) for shared services. Each commune must have a <b>commission for intercultural living together</b>.</p>
`,
      facts: [
        ['Number of communes', '100 (since 1 September 2023)'],
        ['Term of the communal council', '6 years'],
        ['Last communal elections', '11 June 2023'],
        ['Executive body of a commune', 'College of the mayor and aldermen'],
        ['Who appoints the mayor?', 'The Grand Duke, from among the elected councillors'],
        ['Minister supervising the communes', 'Minister of Home Affairs (Interior)'],
        ['Can foreigners vote in communal elections?', 'Yes, if registered (EU and non-EU)'],
        ['Example of communal competence', 'Civil registry, primary schools, water, waste, building permits']
      ]
    },
    {
      id: 'i9',
      title: 'Elections & political parties',
      minutes: 5,
      html: `
<p class="lead">This lesson pulls together the <b>elections</b> held in Luxembourg and the main <b>political parties</b>.</p>

<table class="tbl">
  <tr><th></th><th>Legislative</th><th>Communal</th><th>European</th></tr>
  <tr><td>Every</td><td>5 years</td><td>6 years</td><td>5 years</td></tr>
  <tr><td>Seats</td><td>60 deputies</td><td>7–27 councillors per commune</td><td>6 MEPs</td></tr>
  <tr><td>Constituencies</td><td>4</td><td>Each commune</td><td>1 (whole country)</td></tr>
  <tr><td>Voters</td><td>Luxembourgers</td><td>Luxembourgers + registered foreigners</td><td>Luxembourgers + registered EU citizens</td></tr>
  <tr><td>Last</td><td>8 Oct 2023</td><td>11 June 2023</td><td>9 June 2024</td></tr>
</table>
<ul>
  <li>Luxembourgers living abroad can vote <b>by post</b> in legislative and European elections.</li>
  <li>European Parliament members have been <b>directly elected since 1979</b>.</li>
</ul>

<h3>Main political parties</h3>
<table class="tbl">
  <tr><td><b>CSV</b></td><td>Christian Social People's Party, centre-right. The largest party for most of the post-war period.</td></tr>
  <tr><td><b>DP</b></td><td>Democratic Party, liberal</td></tr>
  <tr><td><b>LSAP</b></td><td>Luxembourg Socialist Workers' Party, social democrat</td></tr>
  <tr><td><b>déi gréng</b></td><td>The Greens, ecologist</td></tr>
  <tr><td><b>ADR</b></td><td>Alternative Democratic Reform Party, national-conservative</td></tr>
  <tr><td><b>Piraten</b></td><td>Pirate Party</td></tr>
  <tr><td><b>déi Lénk</b></td><td>The Left</td></tr>
</table>
<p>Recent coalitions: CSV–LSAP (until 2013), then <b>DP–LSAP–déi gréng</b> (the "Gambia" coalition, 2013–2023), then <b>CSV–DP</b> (since 2023).</p>
`,
      facts: [
        ['How many MEPs does Luxembourg elect?', '6'],
        ['European elections constituency', 'One single national constituency'],
        ['Last European elections', '9 June 2024'],
        ['"Gambia" coalition (2013–2023)', 'DP–LSAP–déi gréng'],
        ['Can Luxembourgers abroad vote?', 'Yes, by post (legislative & European elections)'],
        ['Communal vs legislative term', '6 years vs 5 years']
      ]
    }
  ],
  questions: [
    // i1 State
    { l: 'i1', q: 'Since which treaty has Luxembourg been an independent and sovereign State?', o: ['Treaty of London, 19 April 1839', 'Treaty of Rome, 1957', 'Congress of Vienna, 1815', 'Treaty of Maastricht, 1992'], e: 'The Treaty of London of 19 April 1839 recognised Luxembourg\'s independence (but also cost it its western part, given to Belgium).' },
    { l: 'i1', q: 'Who exercises the executive power?', o: ['The Grand Duke together with the Government', 'The Chamber of Deputies', 'The Council of State', 'The Constitutional Court'], e: 'The Grand Duke exercises the executive power jointly with the Government. The ministers bear responsibility.' },
    { l: 'i1', q: 'Which power is the only one that is completely independent in Luxembourg?', o: ['The judicial power', 'The legislative power', 'The executive power', 'None of them'], e: 'Separation of powers is flexible between the legislature and the executive. Only the judiciary is fully independent.' },
    { l: 'i1', q: 'What is the area of Luxembourg?', o: ['2,586 km²', '998 km²', '5,860 km²', '25,860 km²'], e: 'Luxembourg covers 2,586 km² and borders Belgium, Germany and France.' },
    { l: 'i1', q: 'Which countries border Luxembourg?', o: ['Belgium, Germany and France', 'Belgium, the Netherlands and Germany', 'France, Switzerland and Germany', 'Belgium, France and the Netherlands'], e: 'Luxembourg has three neighbours: Belgium (west/north), Germany (east) and France (south).' },
    { l: 'i1', q: 'How many cantons does Luxembourg have?', o: ['12', '4', '3', '100'], e: '12 cantons. They are grouped into 4 electoral constituencies. The 3 districts were abolished in 2015.' },
    { l: 'i1', q: 'What is the only decentralised political level in Luxembourg?', o: ['The commune', 'The province', 'The district', 'The region'], e: 'There are no provinces or regions. The commune is the only decentralised level with elected bodies.' },
    // i2 Grand Duke
    { l: 'i2', q: 'Who has been the Head of State of Luxembourg since 3 October 2025?', o: ['Grand Duke Guillaume', 'Grand Duke Henri', 'Grand Duke Jean', 'Grand Duchess Charlotte'], e: 'Grand Duke Henri abdicated and Grand Duke Guillaume became Head of State on 3 October 2025.' },
    { l: 'i2', q: 'What does the Constitution mean when it says the person of the Grand Duke is "inviolable"?', o: ['He cannot be prosecuted and bears no political responsibility', 'He can never travel abroad', 'He can veto any law', 'He is elected for life by the Chamber'], e: 'The Grand Duke cannot be prosecuted and is politically irresponsible. Ministers take the responsibility by countersigning.' },
    { l: 'i2', q: 'What is a "countersignature"?', o: ['A minister\'s signature next to the Grand Duke\'s, by which the minister takes responsibility', 'The signature of a law by all 60 deputies', 'The approval of a treaty by the EU', 'The signature of the mayor on a building permit'], e: 'Every act of the Grand Duke must be countersigned by a member of the Government, who becomes responsible for it.' },
    { l: 'i2', q: 'Which change was made to the Constitution in 2009 regarding the Grand Duke and laws?', o: ['He now only promulgates laws and no longer has to sanction (approve) them', 'He lost the right to appoint the Prime Minister', 'He was given a right of veto', 'He must now be elected'], e: 'After Grand Duke Henri\'s objection to the euthanasia law, the 2009 revision removed the sanction. The Grand Duke only promulgates.' },
    { l: 'i2', q: 'If the Grand Duke dissolves the Chamber of Deputies, new elections must be held within…', o: ['3 months', '1 month', '6 months', '1 year'], e: 'After a dissolution, elections take place within three months. This happened in 2013.' },
    { l: 'i2', q: 'How is the throne passed on today?', o: ['To the eldest child, girl or boy', 'Only to the eldest son', 'By election in the Chamber', 'By referendum'], e: 'Since the 2010/2011 reform, the eldest child inherits regardless of gender (equal primogeniture).' },
    { l: 'i2', q: 'Before whom does a new Grand Duke take the constitutional oath?', o: ['The Chamber of Deputies', 'The Pope', 'The Council of State', 'The Constitutional Court'], e: 'On accession, the Grand Duke swears the constitutional oath before the Chamber of Deputies, the representatives of the Nation.' },
    { l: 'i2', q: 'Which of these is NOT a power of the Grand Duke?', o: ['Voting laws in the Chamber', 'Promulgating laws', 'Appointing the members of the Government', 'Granting pardons'], e: 'Laws are voted by the Chamber of Deputies. The Grand Duke promulgates them, appoints ministers and has the right of pardon.' },
    { l: 'i2', q: 'To which dynasty does the Luxembourg grand ducal family belong?', o: ['The House of Nassau', 'The House of Habsburg', 'The House of Windsor', 'The House of Orange'], e: 'The crown is hereditary in the House of Nassau (Nassau-Weilburg, continued by the Bourbon-Parma-Nassau line).' },
    { l: 'i2', q: 'Who is the heir to the throne after Grand Duke Guillaume?', o: ['Prince Charles', 'Prince Félix', 'Prince Louis', 'Prince Sébastien'], e: 'Prince Charles, born in 2020, is the eldest child of Grand Duke Guillaume and Grand Duchess Stéphanie.' },
    { tf: true, l: 'i2', q: 'The Grand Duke can conclude treaties, but they need the approval of the Chamber of Deputies by law.', a: true, e: 'True. Treaties only take effect in Luxembourg after approval by law.' },
    // i3 Chamber
    { l: 'i3', q: 'How many deputies sit in the Chamber of Deputies?', o: ['60', '21', '100', '120'], e: 'The Chamber has 60 deputies, elected for 5 years.' },
    { l: 'i3', q: 'For how many years are deputies elected?', o: ['5 years', '4 years', '6 years', '7 years'], e: 'The legislative term is five years (communal councils: six years).' },
    { l: 'i3', q: 'How many electoral constituencies are there for legislative elections?', o: ['4', '12', '3', '1'], e: 'Four: South (23 seats), Centre (21), North (9) and East (7).' },
    { l: 'i3', q: 'Which constituency elects the most deputies?', o: ['South (23)', 'Centre (21)', 'North (9)', 'East (7)'], e: 'The South (cantons of Esch-sur-Alzette and Capellen) elects 23 of the 60 deputies.' },
    { l: 'i3', q: 'How many deputies are elected in the East constituency?', o: ['7', '9', '21', '23'], e: 'East (Grevenmacher, Remich, Echternach) elects 7 deputies.' },
    { l: 'i3', q: 'What is "panachage" in Luxembourg elections?', o: ['Distributing your votes among candidates of different lists', 'Voting twice in two constituencies', 'Voting by post', 'A coalition between two parties'], e: 'Voters can give individual votes to candidates on different lists instead of voting for one whole list.' },
    { l: 'i3', q: 'What kind of electoral system is used for the Chamber of Deputies?', o: ['Proportional representation', 'First-past-the-post in single-member districts', 'Two-round majority system', 'Appointment by the Grand Duke'], e: 'Deputies are elected by direct universal suffrage using proportional representation by list.' },
    { l: 'i3', q: 'Which of these is a main task of the Chamber of Deputies?', o: ['Voting laws and the State budget', 'Judging criminal cases', 'Appointing mayors', 'Promulgating laws'], e: 'The Chamber votes laws and the budget, and controls the Government.' },
    { l: 'i3', q: 'How can the Chamber force the Government to resign?', o: ['By a motion of censure or by refusing a vote of confidence', 'By a parliamentary question', 'By a petition', 'It cannot'], e: 'Ministers are responsible to the Chamber. A motion of censure or a lost vote of confidence obliges the Government to resign.' },
    { l: 'i3', q: 'Luxembourg\'s parliament is…', o: ['unicameral (one chamber)', 'bicameral (two chambers)', 'tricameral', 'elected by the communes'], e: 'There is only one chamber, the Chamber of Deputies. The Council of State acts as a sort of "second chamber" but is not elected.' },
    { l: 'i3', q: 'What is the minimum number of deputies needed to form a political group?', o: ['5', '2', '10', '31'], e: 'A political group (groupe politique) requires at least five deputies. Smaller parties form "sensibilités politiques".' },
    { l: 'i3', q: 'Which party won the most seats in the October 2023 legislative elections?', o: ['CSV', 'DP', 'LSAP', 'déi gréng'], e: 'CSV won 21 seats, ahead of DP (14), LSAP (11), ADR (5), déi gréng (4), Piraten (3) and déi Lénk (2).' },
    { l: 'i3', q: 'When did the last legislative elections take place?', o: ['8 October 2023', '11 June 2023', '14 October 2018', '9 June 2024'], e: 'The legislative elections took place on 8 October 2023. 11 June 2023 was the date of the communal elections.' },
    { l: 'i3', q: 'Who is the President of the Chamber of Deputies (since 2023)?', o: ['Claude Wiseler', 'Luc Frieden', 'Xavier Bettel', 'Fernand Etgen'], e: 'Claude Wiseler (CSV) has presided over the Chamber since November 2023. Fernand Etgen was his predecessor.' },
    { l: 'i3', q: 'Who appoints the Ombudsman (Médiateur)?', o: ['The Chamber of Deputies', 'The Grand Duke alone', 'The Prime Minister', 'The European Union'], e: 'The Ombudsman is attached to and appointed by the Chamber of Deputies.' },
    { tf: true, l: 'i3', q: 'A deputy can at the same time be a member of the Government.', a: false, e: 'False. The office of deputy is incompatible with that of member of the Government, judge or member of the Council of State.' },
    { tf: true, l: 'i3', q: 'Sessions of the Chamber of Deputies are in principle public.', a: true, e: 'True. Plenary sessions are public and broadcast (Chamber TV).' },
    // i4 Government
    { l: 'i4', q: 'Who has been Prime Minister of Luxembourg since November 2023?', o: ['Luc Frieden', 'Xavier Bettel', 'Jean-Claude Juncker', 'Paulette Lenert'], e: 'Luc Frieden (CSV) leads a CSV–DP coalition government formed on 17 November 2023.' },
    { l: 'i4', q: 'Which parties form the government coalition formed in 2023?', o: ['CSV and DP', 'DP, LSAP and déi gréng', 'CSV and LSAP', 'LSAP and ADR'], e: 'The Frieden–Bettel government is a CSV–DP coalition. The previous one (2013–2023) was DP–LSAP–déi gréng.' },
    { l: 'i4', q: 'Who formally appoints the Prime Minister and the ministers?', o: ['The Grand Duke', 'The Chamber of Deputies', 'The voters directly', 'The Council of State'], e: 'The Grand Duke appoints the Government, based on the election results and coalition negotiations.' },
    { l: 'i4', q: 'How many seats does a coalition need for an absolute majority in the Chamber?', o: ['31', '30', '40', '21'], e: 'With 60 seats, 31 is the absolute majority. The CSV–DP coalition holds 35.' },
    { l: 'i4', q: 'What is a "projet de loi"?', o: ['A bill introduced by the Government', 'A bill introduced by a deputy', 'A decision of a court', 'A communal regulation'], e: 'Projet de loi = Government bill. Proposition de loi = bill introduced by deputies.' },
    { l: 'i4', q: 'What nationality must a Luxembourg minister have?', o: ['Luxembourgish', 'Any EU nationality', 'Any nationality, if resident', 'Luxembourgish or Belgian'], e: 'Members of the Government must be Luxembourg nationals.' },
    { l: 'i4', q: 'What is the name of the weekly collective meeting of ministers?', o: ['The Government Council (Conseil de gouvernement)', 'The Conference of Presidents', 'The Tripartite', 'The Council of State'], e: 'The ministers meet in the Conseil de gouvernement, usually once a week.' },
    { l: 'i4', q: 'Who was Prime Minister of Luxembourg from 2013 to 2023?', o: ['Xavier Bettel', 'Jean-Claude Juncker', 'Jacques Santer', 'Luc Frieden'], e: 'Xavier Bettel (DP) led the DP–LSAP–déi gréng coalition. Juncker was PM from 1995 to 2013.' },
    { l: 'i4', q: 'After forming, the new Government presents its programme to the Chamber, which then…', o: ['holds a vote of confidence', 'elects the Prime Minister by secret ballot', 'sends it to the Council of State for approval', 'organises a referendum'], e: 'The Chamber holds a vote of confidence, confirming that the Government has a parliamentary majority.' },
    { tf: true, l: 'i4', q: 'Ministers are politically responsible to the Chamber of Deputies.', a: true, e: 'True. That is the core of the parliamentary system.' },
    // i5 Law & Council of State
    { l: 'i5', q: 'How many members does the Council of State have?', o: ['21', '60', '9', '12'], e: 'The Council of State has 21 councillors, at least 11 of whom hold a law degree.' },
    { l: 'i5', q: 'For how long are councillors of State appointed?', o: ['12 years', '5 years', '6 years', 'For life'], e: 'Councillors of State are appointed by the Grand Duke for a term of 12 years.' },
    { l: 'i5', q: 'What is the main role of the Council of State?', o: ['To give its opinion on bills and draft regulations', 'To vote the laws', 'To judge criminal cases', 'To elect the Grand Duke'], e: 'The Council of State gives opinions on all bills, checking their compliance with the Constitution, treaties and the rule of law.' },
    { l: 'i5', q: 'What is the "second constitutional vote"?', o: ['A second vote on a law, at least 3 months after the first, unless waived', 'A referendum after each law', 'The vote of the Grand Duke', 'A vote in the European Parliament'], e: 'Each law must be voted a second time after at least three months, unless the Council of State (with the Chamber) agrees to waive it.' },
    { l: 'i5', q: 'By refusing to waive the second vote, the Council of State has…', o: ['a suspensive veto of 3 months', 'an absolute veto', 'the power to cancel the law', 'the power to dissolve the Chamber'], e: 'Its role is advisory, but refusing the waiver delays the law by at least 3 months: a suspensive veto.' },
    { l: 'i5', q: 'Who appoints the members of the Council of State?', o: ['The Grand Duke, on proposal of the Government, the Chamber or the Council itself', 'The voters', 'The Prime Minister alone', 'The Constitutional Court'], e: 'Councillors are appointed by the Grand Duke. Proposals alternate between the Government, the Chamber and the Council of State.' },
    { l: 'i5', q: 'Which body gives its opinion on a bill in addition to the Council of State, if it concerns their field?', o: ['The professional chambers', 'The European Commission', 'The communal councils', 'The police'], e: 'The professional chambers concerned (e.g. Chamber of Employees, Chamber of Commerce) give opinions on bills relevant to them.' },
    { l: 'i5', q: 'Put in order: (A) promulgation by the Grand Duke, (B) vote in the Chamber, (C) opinion of the Council of State, (D) publication.', o: ['C → B → A → D', 'B → C → D → A', 'A → B → C → D', 'D → C → B → A'], e: 'Opinion of the Council of State → vote in the Chamber → promulgation → publication in the Journal officiel.' },
    { l: 'i5', q: 'Until 1996, the Council of State also acted as…', o: ['the supreme administrative court', 'the Constitutional Court', 'the Court of Auditors', 'a second elected chamber'], e: 'Its litigation committee was the supreme administrative court until the creation of the Administrative Tribunal and Court (1996/97).' },
    { tf: true, l: 'i5', q: 'The opinions of the Council of State are binding on the Chamber of Deputies.', a: false, e: 'False. The Council of State is advisory. It persuades but cannot impose, except for delaying via the second vote.' },
    { tf: true, l: 'i5', q: 'A law enters into force only after its publication in the Journal officiel.', a: true, e: 'True. Publication makes the law enforceable.' },
    // i6 Justice
    { l: 'i6', q: 'Where are the three justices of the peace (justices de paix) located?', o: ['Luxembourg, Esch-sur-Alzette and Diekirch', 'Luxembourg, Ettelbruck and Wiltz', 'Esch-sur-Alzette, Remich and Clervaux', 'Luxembourg, Diekirch and Grevenmacher'], e: 'The three justices of the peace are in Luxembourg, Esch-sur-Alzette and Diekirch.' },
    { l: 'i6', q: 'How many district courts (tribunaux d\'arrondissement) are there?', o: ['2: Luxembourg and Diekirch', '3: Luxembourg, Esch and Diekirch', '1: Luxembourg', '12: one per canton'], e: 'There are two judicial districts, Luxembourg and Diekirch, each with a district court.' },
    { l: 'i6', q: 'What are the two orders of jurisdiction in Luxembourg?', o: ['Judicial and administrative', 'Civil and military', 'National and communal', 'Religious and secular'], e: 'Judicial courts (civil, commercial, criminal) and administrative courts (disputes with the administration). There is also a Constitutional Court.' },
    { l: 'i6', q: 'You want to challenge the refusal of a building permit by the administration. Which court is competent at first instance?', o: ['The Administrative Tribunal', 'The Court of Cassation', 'The Constitutional Court', 'The justice of the peace'], e: 'Disputes with the administration go to the Administrative Tribunal, with appeal to the Administrative Court.' },
    { l: 'i6', q: 'How many members does the Constitutional Court have?', o: ['9', '21', '5', '60'], e: 'The Constitutional Court has nine members and rules on the conformity of laws with the Constitution.' },
    { l: 'i6', q: 'How does a case reach the Constitutional Court?', o: ['Through a preliminary question from another court', 'By a direct application from any citizen', 'Through a petition of 4,500 signatures', 'At the request of the Grand Duke only'], e: 'Citizens cannot go directly to it. A court refers the question when the constitutionality of a law is decisive for a case.' },
    { l: 'i6', q: 'What does the Court of Cassation examine?', o: ['Only whether the law was correctly applied, not the facts', 'All the facts of the case again', 'The constitutionality of laws', 'Disputes with the administration'], e: 'Cassation is not a third trial. It checks the correct application of the law.' },
    { l: 'i6', q: 'Which body, created by the 2023 Constitution, guarantees the independence of the judiciary?', o: ['The National Council of Justice', 'The Council of State', 'The Court of Auditors', 'The Ombudsman'], e: 'The Conseil national de la justice ensures the good functioning and independence of justice and proposes magistrate appointments.' },
    { l: 'i6', q: 'Who prosecutes criminal offences on behalf of society?', o: ['The Public Prosecutor\'s Office (Parquet)', 'The Ombudsman', 'The communal council', 'The Council of State'], e: 'The Ministère public (Parquet) investigates and prosecutes offences and represents society before the courts.' },
    { tf: true, l: 'i6', q: 'Criminal cases in Luxembourg are judged by a popular jury of citizens.', a: false, e: 'False. Luxembourg has no jury. Criminal cases are judged by professional judges.' },
    { tf: true, l: 'i6', q: 'The highest court of the judicial order is the Superior Court of Justice, which includes the Court of Appeal and the Court of Cassation.', a: true, e: 'True. It sits in Luxembourg City (Cité judiciaire).' },
    // i7 advisory bodies
    { l: 'i7', q: 'Which institution controls the financial management of public money?', o: ['The Court of Auditors (Cour des comptes)', 'The Council of State', 'The Chamber of Commerce', 'The Central Bank'], e: 'The Cour des comptes audits public finances and reports to the Chamber of Deputies.' },
    { l: 'i7', q: 'How many professional chambers are there in Luxembourg?', o: ['5', '6', '3', '12'], e: 'Five: Commerce, Skilled Trades, Agriculture (employers), Employees (CSL) and Civil Servants & Public Employees (workers).' },
    { l: 'i7', q: 'Which professional chamber represents private-sector employees and pensioners?', o: ['The Chamber of Employees (CSL)', 'The Chamber of Commerce', 'The Chamber of Skilled Trades', 'The Council of State'], e: 'The Chambre des salariés (CSL), created in 2009, represents employees of the private sector and pensioners.' },
    { l: 'i7', q: 'What is the "Tripartite"?', o: ['Concertation between the Government, employers and trade unions', 'The three branches of power', 'The three official languages', 'A treaty between Benelux countries'], e: 'Created in 1977 during the steel crisis, the Tripartite is the heart of the "Luxembourg social model".' },
    { l: 'i7', q: 'What is the role of the professional chambers in the legislative process?', o: ['They give opinions on bills concerning their field', 'They vote laws', 'They promulgate laws', 'They judge disputes'], e: 'Professional chambers must be consulted on bills and regulations in their field, and they can make proposals.' },
    { l: 'i7', q: 'Which mechanism automatically adapts wages to the cost of living?', o: ['Wage indexation', 'The Tripartite', 'The social minimum wage referendum', 'The second constitutional vote'], e: 'Automatic wage indexation adjusts wages when inflation crosses a threshold.' },
    { tf: true, l: 'i7', q: 'Foreign workers are members of the professional chambers and can vote in their elections.', a: true, e: 'True. Membership is linked to the job, not nationality.' },
    // i8 communes
    { l: 'i8', q: 'How many communes does Luxembourg have (since 2023)?', o: ['100', '116', '102', '12'], e: 'After the latest mergers on 1 September 2023, there are 100 communes (there were 116 in 2006 and 102 in 2018).' },
    { l: 'i8', q: 'For how long is the communal council elected?', o: ['6 years', '5 years', '4 years', '7 years'], e: 'The communal council is elected for 6 years. The last elections were on 11 June 2023.' },
    { l: 'i8', q: 'What is the executive body of a commune?', o: ['The college of the mayor and aldermen', 'The communal council', 'The Council of State', 'The district commissioner'], e: 'The collège des bourgmestre et échevins manages the commune. The communal council is the deliberative body.' },
    { l: 'i8', q: 'Who appoints the mayor (bourgmestre)?', o: ['The Grand Duke, from among the elected communal councillors', 'The citizens in a direct election', 'The Prime Minister freely', 'The Chamber of Deputies'], e: 'The mayor is appointed by the Grand Duke from among the members of the communal council (normally from the majority).' },
    { l: 'i8', q: 'Which minister supervises the communes?', o: ['The Minister of Home Affairs (Interior)', 'The Minister of Justice', 'The Minister of Finance', 'The Minister of Foreign Affairs'], e: 'The State supervises the communes through the Minister of Home Affairs.' },
    { l: 'i8', q: 'Which of these tasks is a competence of the commune?', o: ['The civil registry (births, marriages, deaths)', 'Foreign policy', 'Running the army', 'Criminal justice'], e: 'Communes run the civil registry, primary (fundamental) schools, water supply, waste collection, local roads, building permits and more.' },
    { l: 'i8', q: 'Who can vote in communal elections?', o: ['Luxembourgers and registered foreign residents aged 18+', 'Only Luxembourgers', 'Only EU citizens', 'Only property owners'], e: 'All foreign residents (EU and non-EU) aged 18+ can register. Voting is then compulsory.' },
    { l: 'i8', q: 'When did the last communal elections take place?', o: ['11 June 2023', '8 October 2023', '9 June 2024', '8 October 2017'], e: 'The communal elections were held on 11 June 2023. The next are due in 2029.' },
    { l: 'i8', q: 'Which body votes the communal budget?', o: ['The communal council', 'The mayor alone', 'The Chamber of Deputies', 'The Court of Auditors'], e: 'The communal council is the "local parliament": it votes the budget, local taxes and communal regulations.' },
    { l: 'i8', q: 'Where do you go to register your arrival when you move to Luxembourg?', o: ['The commune where you live', 'The Ministry of Foreign Affairs', 'The Chamber of Deputies', 'The Council of State'], e: 'Residents register with their commune of residence (population register). The commune also manages the electoral rolls.' },
    { tf: true, l: 'i8', q: 'Each commune must have a commission for intercultural living together.', a: true, e: 'True. Since the 2023 law on intercultural living together, every commune has such a commission (formerly the CCCI).' },
    // i9 elections & parties
    { l: 'i9', q: 'How many members of the European Parliament does Luxembourg elect?', o: ['6', '3', '12', '60'], e: 'Luxembourg elects 6 MEPs in one national constituency every 5 years.' },
    { l: 'i9', q: 'Who can vote in the European elections in Luxembourg?', o: ['Luxembourgers and registered EU citizens living in Luxembourg', 'Only Luxembourgers', 'All residents, including non-EU', 'Only people over 21'], e: 'EU citizens resident in Luxembourg can register to vote. Non-EU nationals cannot vote in European elections.' },
    { l: 'i9', q: 'Which coalition governed Luxembourg from 2013 to 2023 (the "Gambia" coalition)?', o: ['DP–LSAP–déi gréng', 'CSV–DP', 'CSV–LSAP', 'DP–ADR'], e: 'Named after the colours of the Gambian flag (blue, red, green), it was led by Xavier Bettel.' },
    { l: 'i9', q: 'Since when have members of the European Parliament been directly elected?', o: ['1979', '1957', '1992', '2004'], e: 'The first direct European elections took place in 1979.' },
    { l: 'i9', q: 'Which party has been the largest in most post-war Luxembourg elections?', o: ['CSV (Christian Social People\'s Party)', 'DP', 'LSAP', 'Piraten'], e: 'The CSV has been the strongest party in most elections since 1945 and led most governments.' },
    { tf: true, l: 'i9', q: 'Luxembourgers living abroad can vote by post in legislative elections.', a: true, e: 'True. Postal voting is available for legislative and European elections.' }
  ]
});
