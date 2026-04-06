// cards.js — all flashcard content

var CARDS = [

  // ── MAKRO II — grafkort ─────────────────────────────────
  { topic: 'makro2', type: 'graph', graph: 'ad-as-shock',
    q: 'AD falder fra AD\u2081 til AD\u2082. Hvad sker der p\u00e5 kort sigt (A\u2192B), og hvor ender \u00f8konomien p\u00e5 lang sigt?',
    a: 'P\u00e5 kort sigt bev\u00e6ger \u00f8konomien sig fra A til B langs SRAS \u2014 b\u00e5de output og inflation falder. P\u00e5 lang sigt presser faldende l\u00f8nkrav SRAS nedad, indtil output vender tilbage til $\\bar{y}$ men til lavere inflation.',
    hint: 'KS: bev\u00e6gelse langs SRAS. LS: SRAS skifter nedad' },

  { topic: 'makro2', type: 'graph', graph: 'phillips',
    q: 'Hvad forklarer bev\u00e6gelsen A\u2192B, og hvad sker der med SRPC p\u00e5 lang sigt?',
    a: 'A\u2192B: stram pengepolitik h\u00e6ver ledighed og s\u00e6nker inflation \u2014 bev\u00e6gelse langs SRPC\u2081. P\u00e5 lang sigt tilpasses $\\pi^e$ nedad og SRPC\u2082 skifter nedad. Langsigtsliges\u00e6gt er altid ved $u^*$.',
    hint: 'LR Phillips er lodret ved $u^*$ \u2014 ingen trade-off p\u00e5 lang sigt' },

  { topic: 'makro2', type: 'graph', graph: 'is-curve',
    q: 'IS-kurven skifter fra IS\u2081 til IS\u2082. Hvad kan have \u00e5rsaget dette, og hvad sker der med output?',
    a: 'IS skifter h\u00f8jre ved: \u00f8get $G$, skattelettelser, eksportstigning eller h\u00f8jere forbrugertillid. Ved uændret rente $r_0$ stiger output fra $y_1$ til $y_2$. Multiplikatoreffekten bestemmer st\u00f8rrelsen af skiftet.',
    hint: 'IS skifter = \u00e6ndring i autonom eftersp\u00f8rgsel' },

  { topic: 'makro2', type: 'graph', graph: 'tobins-q',
    q: 'Hvorn\u00e5r investerer virksomheden, og hvad er intuitionen bag liges\u00e6gt ved $q = 1$?',
    a: 'Investér n\u00e5r $q > 1$: markedsv\u00e6rdien af ny kapital overstiger genanskaffelsesomkostningen. Stop n\u00e5r $q < 1$: billigere at k\u00f8be eksisterende kapital p\u00e5 markedet. Liges\u00e6gt: $q = 1$ hvor $V_t = p_K K_t$.',
    hint: '$q = V / (p_K K)$ \u2014 h\u00e6ldning af V-linjen vs. genanskaffelseslinjen' },

  { topic: 'makro2', type: 'graph', graph: 'zlb',
    q: 'Hvad er ZLB-problemet, og hvorfor \u00e6ndrer AD-kurvens egenskaber sig ved $i = 0$?',
    a: 'Normalt: lavere $\\pi$ \u2192 CB s\u00e6nker $i$ \u2192 lavere $r$ \u2192 h\u00f8jere eftersp\u00f8rgsel. Ved ZLB kan $i$ ikke falde mere. Falder $\\pi$ nu, stiger $r = i - \\pi$ automatisk \u2014 selvforst\u00e6rkende deflation er mulig (punkt B).',
    hint: '$r = i - \\pi$ \u2014 ved $i = 0$ styrer $\\pi$ alene realrenten' },

  // ── MAKRO II — tekst/mc ─────────────────────────────────
  { topic: 'makro2', type: 'text',
    q: 'Hvad er Taylor-princippet?',
    a: 'Centralbanken h\u00e6ver den nominelle rente med mere end stigningen i inflationen, s\u00e5 realrenten faktisk stiger og d\u00e6mper eftersp\u00f8rgslen. Taylor-reglen: $$i = r + \\pi + h(\\pi - \\pi^*)$$ hvor $h > 0$.',
    hint: 'Hvis $i$ stiger pr\u00e6cis som $\\pi$, \u00e6ndres $r = i - \\pi$ ikke' },

  { topic: 'makro2', type: 'mc',
    q: 'Hvad sker der p\u00e5 lang sigt, hvis finanspolitikken strammes permanent (lavere $G$)?',
    options: ['Output falder permanent under $\\bar{y}$', 'Inflationen stiger kompenserende', 'Sammenst\u00e6tningen af eftersp\u00f8rgsel \u00e6ndres, men output forbliver $\\bar{y}$', 'Centralbanken h\u00e6ver renten for at stabilisere'],
    correct: 2, hint: 'Crowding-in: lavere $r$ \u2192 h\u00f8jere privat $I$ erstatter lavere $G$' },

  { topic: 'makro2', type: 'text',
    q: 'Hvad er den forventningsudvidede Phillips-kurve?',
    a: '$$\\pi_t = \\pi_t^e + \\gamma(Y_t - \\bar{Y}) + s_t$$ Inflationen afh\u00e6nger af forventninger $\\pi^e$, outputgabet $(Y_t - \\bar{Y})$ og udbudss\u00f8d $s_t$. $\\gamma$ m\u00e5ler prissf\u00f8lsomheden.',
    hint: 'H\u00f8j $\\gamma$ = stejl kurve = fleksible priser' },

  { topic: 'makro2', type: 'mc',
    q: 'Hvad er Tobin\'s $q$, og hvorn\u00e5r b\u00f8r en virksomhed investere?',
    options: ['$q$ = Markedsv\u00e6rdi / Bogf\u00f8rt egenkapital; investér n\u00e5r $q < 1$', '$q$ = Markedsv\u00e6rdi / Genanskaffelsesv\u00e6rdi; investér n\u00e5r $q > 1$', '$q$ = Dividende / Aktiekurs; investér altid n\u00e5r $q$ stiger', '$q$ = Realrente / Nominel rente; investér n\u00e5r $q = 1$'],
    correct: 1, hint: '$q > 1$: markedet vurderer ny kapital h\u00f8jere end den koster' },

  { topic: 'makro2', type: 'text',
    q: 'Hvad er UIP-betingelsen (Ud\u00e6kket Renteparitet)?',
    a: '$$i = i^* + \\Delta e^e$$ Den indenlandske rente skal svare til den udenlandske rente plus forventet valutakurs\u00e6ndring. Fri kapitalstr\u00f8m eliminerer arbitragemuligheder.',
    hint: 'Arbitrage tvinger forventet afkast til at udlignes' },

  { topic: 'makro2', type: 'mc',
    q: 'Hvad kendetegner langsigtsliges\u00e6gt i AS-AD-modellen?',
    options: ['AD sk\u00e6rer SRAS; $\\pi > \\pi^*$', 'Output er over potentielt niveau $\\bar{y}$', 'AD sk\u00e6rer LRAS; faktisk output $= \\bar{y}$ og $\\pi = \\pi^e$', 'Centralbanken s\u00e6tter $i = 0$'],
    correct: 2, hint: 'P\u00e5 lang sigt bestemmer udbuddet, ikke eftersp\u00f8rgslen' },

  { topic: 'makro2', type: 'text',
    q: 'Hvad er Fisher-ligningen og Fisher-effekten?',
    a: '$$i \\approx r + \\pi^e$$ P\u00e5 lang sigt f\u00f8rer 1 pp h\u00f8jere $\\pi$ til 1 pp h\u00f8jere $i$, mens realrenten $r$ forbliver u\u00e6ndret.',
    hint: 'L\u00e5ngivere kr\u00e6ver kompensation for inflation' },

  { topic: 'makro2', type: 'mc',
    q: 'Hvad er den sociale velf\u00e6rdstabsfunktion $SL$?',
    options: ['$SL = (y - \\bar{y}) + \\kappa(\\pi - \\pi^*)$', '$SL = (y - \\bar{y})^2 + \\kappa(\\pi - \\pi^*)^2$', '$SL = \\kappa(y - \\bar{y})^2 - (\\pi - \\pi^*)^2$', '$SL = (y - \\bar{y}) \\cdot \\kappa \\cdot (\\pi - \\pi^*)$'],
    correct: 1, hint: 'Kvadreret: store afvigelser er uforholdsm\u00e6ssigt skadelige' },

  { topic: 'makro2', type: 'text',
    q: 'Hvad er Ricardiansk \u00c6kvivalens, og hvorn\u00e5r bryder den ned?',
    a: 'En l\u00e5nefinansieret skattelettelse \u00e6ndrer ikke privatforbruget \u2014 rationelle husholdninger sparer op til fremtidige skatter. Bryder ned ved: 1) kreditbegr\u00e6nsninger, 2) kortsynethed, 3) forvridende skatter.',
    hint: 'Rationelle agenter internaliserer statens budgetbetingelse' },

  { topic: 'makro2', type: 'mc',
    q: 'Hvad er den finanspolitiske multiplikator i en \u00e5ben \u00f8konomi med skat?',
    options: ['$\\frac{1}{1-mpc}$', '$\\frac{1}{1-mpc(1-t)+m}$', '$\\frac{mpc}{1-mpc}$', '$\\frac{1}{mpc+t}$'],
    correct: 1, hint: 'L\u00e6kager: skattesats $t$ og importtilb\u00f8jelighed $m$ s\u00e6nker multiplikatoren' },

  // ── MIKRO II ────────────────────────────────────────────
  { topic: 'mikro2', type: 'text',
    q: 'Hvad er Marginal Factor Cost (MFC) for en monopsonist?',
    a: '$$MFC(x) = w_s(x) + w_s\'(x) \\cdot x$$ F\u00f8rste led: l\u00f8n til den marginale arbejder. Andet led: l\u00f8nstigningen der nu skal betales til alle eksisterende arbejdere.',
    hint: 'Ans\u00e6t \u00e9n mere \u2192 h\u00e6ver l\u00f8nnen for alle' },

  { topic: 'mikro2', type: 'mc',
    q: 'Hvad er profitmaksimeringsvilk\u00e5ret for en monopsonist?',
    options: ['$MP(x) = w_s(x)$', '$MP(x) = MFC(x) = w_s(x) + w_s\'(x)x$', '$MR(x) = w_s(x)$', '$MP(x) = 0$'],
    correct: 1, hint: 'Monopsonisten ans\u00e6tter f\u00e6rre end det socialt effektive niveau' },

  { topic: 'mikro2', type: 'text',
    q: 'Hvad er principal-agent problemet?',
    a: 'Principalen kan ikke observere agentens indsats (skjult handling). L\u00f8sning: incitamentskontrakt der binder afl\u00f8nning til observerbare resultater, under deltagelsesbetingelsen $u_{agent} \\geq \\bar{u}$.',
    hint: 'Informationsasymmetri \u2192 moral hazard \u2192 incitamentsdesign' },

  { topic: 'mikro2', type: 'mc',
    q: 'Hvad er f\u00f8rstegrads prisdiskrimination?',
    options: ['M\u00e6ngderabat baseret p\u00e5 k\u00f8bt volumen', 'Gruppering af forbrugere i segmenter', 'Perfekt prisdiskrimination: alle betaler pr\u00e6cis deres betalingsvillighed', 'Selvsortering via produktbundter'],
    correct: 2, hint: 'Kr\u00e6ver fuld information om alle forbrugeres betalingsvillighed' },

  { topic: 'mikro2', type: 'text',
    q: 'Hvad er andengrads prisdiskrimination og selvsorteringsproblemet?',
    a: 'Virksomheden tilbyder produktbundter (f.eks. iPhone / iPhone Pro) \u2014 forbrugere sorterer sig selv. Problemet: er den billige pakke for god, v\u00e6lger rige forbrugere den frem for den dyre.',
    hint: 'Ufuldst\u00e6ndig information \u2192 screening via menudesign' },

  { topic: 'mikro2', type: 'mc',
    q: 'Hvad kr\u00e6ver tredjegrads prisdiskrimination?',
    options: ['Fuld information om alle forbrugeres pr\u00e6ferencer', 'Markedsmagt ($P > MC$), evne til at opdele forbrugere, og ingen arbitrage', 'Kun monopolstatus', 'At produktet er et offentligt gode'],
    correct: 1, hint: 'Biografer, fly og studierabatter er klassiske eksempler' },

  { topic: 'mikro2', type: 'text',
    q: 'Hvad er det samfundsm\u00e6ssigt optimale output under monopol?',
    a: 'Socialt optimum: $P = MC$. Monopolisten s\u00e6tter $MR = MC$, men $MR < P$, s\u00e5 $P > MC$ i liges\u00e6gt. D\u00f8dv\u00e6gtstabet er trianglen af urealiserede gevinster fra enheder hvor $P > MC$ men ikke produceres.',
    hint: 'Monopolisten begr\u00e6nser output for at h\u00e6ve prisen' },

  { topic: 'mikro2', type: 'mc',
    q: 'Hvad er en deltagelsesbetingelse (Participation Constraint)?',
    options: ['Agentens indsats skal overstige et minimum', 'Principalen maksimerer profit uden hensyn til agenten', '$u_{agent} \\geq \\bar{u}$: kontrakten skal matche reservationsnytten', 'Agenten skal modtage markedsl\u00f8nnen'],
    correct: 2, hint: 'Uden opfyldt PC afviser agenten kontrakten' },

  // ── ØKONOMETRI I ───────────────────────────────────────
  { topic: 'okonometri', type: 'text',
    q: 'Hvad er Gauss-Markov teoremet?',
    a: 'Under MLR.1\u20135 er OLS-estimatoren BLUE: Best Linear Unbiased Estimator \u2014 mindste varians blandt alle line\u00e6re, middelrette estimatorer. MLR.6 kr\u00e6ves for pr\u00e6cis inferens i sm\u00e5 stikpr\u00f8ver.',
    hint: 'BLUE: MLR.1-5. MVUE (Classical LM): MLR.1-6' },

  { topic: 'okonometri', type: 'mc',
    q: 'Hvad betyder det at $\\hat{\\beta}$ er middelret?',
    options: ['$\\hat{\\beta}$ n\u00e6rmer sig $\\beta$ n\u00e5r $n \\to \\infty$', '$E(\\hat{\\beta}) = \\beta$: rammer den sande parameter i gennemsnit', '$\\hat{\\beta}$ har den mindste varians', '$\\hat{\\beta}$ er ukorreleret med fejlleddet $u$'],
    correct: 1, hint: 'Middelrethed er ikke det samme som konsistens' },

  { topic: 'okonometri', type: 'text',
    q: 'Hvad er konsekvensen af heteroskedasticitet for OLS?',
    a: 'OLS-estimatoren er stadig middelret (MLR.4 intakt), men standardfejlene er ugyldige fordi MLR.5 er brudt. $t$-tests og $F$-tests holder ikke. L\u00f8sning: robuste (Huber-White) standardfejl.',
    hint: 'Hetero bryder MLR.5 men ikke MLR.4' },

  { topic: 'okonometri', type: 'mc',
    q: 'Hvad tester en $F$-test?',
    options: ['Om en enkelt koefficient $\\beta_j = 0$', 'Om modellen er heteroskedastisk', 'Om en gruppe parametre samlet er lig nul (joint significance)', 'Om fejlleddet er normalfordelt'],
    correct: 2, hint: '$F = \\frac{(SSR_r - SSR_{ur})/q}{SSR_{ur}/(n-k-1)}$' },

  { topic: 'okonometri', type: 'text',
    q: 'Hvad er Instrumental Variables (IV)?',
    a: 'IV bruges n\u00e5r $\\text{Cov}(x, u) \\neq 0$. Et gyldigt instrument $Z$ skal v\u00e6re: 1) relevant: $\\text{Cov}(Z, x) \\neq 0$, og 2) eksogent: $\\text{Cov}(Z, u) = 0$.',
    hint: 'Eksogenitetskravet kan typisk ikke testes statistisk' },

  { topic: 'okonometri', type: 'mc',
    q: 'Hvad er "attenuation bias"?',
    options: ['$\\hat{\\beta}$ tr\u00e6kkes mod $+\\infty$', '$\\hat{\\beta}$ tr\u00e6kkes mod $0$ \u2014 effekten undervurderes', 'Standardfejlen eksploderer', '$R^2$ falder til nul'],
    correct: 1, hint: 'St\u00f8j i $x$ fortynder signalet \u2014 IV kan korrigere' },

  { topic: 'okonometri', type: 'text',
    q: 'Hvad er Difference-in-Differences (DiD)?',
    a: 'DiD estimerer kausaleffekten: $$\\hat{\\delta} = (\\bar{y}_{B,\\text{efter}} - \\bar{y}_{B,\\text{f\u00f8r}}) - (\\bar{y}_{K,\\text{efter}} - \\bar{y}_{K,\\text{f\u00f8r}})$$ Kr\u00e6ver parallelle trends.',
    hint: 'Uden tiltag: samme trend i behandlings- og kontrolgruppe' },

  { topic: 'okonometri', type: 'mc',
    q: 'Hvad er Fixed Effects-estimation?',
    options: ['Man antager individeffekter er ukorrelerede med $x$', 'Man fjerner tids-konstant uobserveret heterogenitet via within-transformation', 'Man pooler alle observationer', 'Man bruger GLS til autokorrelation'],
    correct: 1, hint: 'Within: tr\u00e6kker individgennemsnit fra \u2014 eliminerer $a_i$' },

  { topic: 'okonometri', type: 'mc',
    q: 'Hvad er MLR.4, og hvad sker der hvis den brydes?',
    options: ['$u \\sim N(0,\\sigma^2)$; brud giver unpr\u00e6cise $t$-tests', '$E(u|x_1,...,x_k) = 0$; brud g\u00f8r $\\hat{\\beta}$ ikke middelret', '$\\text{Var}(u|x) = \\sigma^2$; brud giver ugyldige standardfejl', 'Ingen multikollinearitet; brud g\u00f8r beregning umulig'],
    correct: 1, hint: 'MLR.4 er kernen i middelrethed' },

  { topic: 'okonometri', type: 'text',
    q: 'Hvad er en dummy-variabel og hvordan fortolkes koefficienten?',
    a: 'En dummy antager 0 eller 1 for at indikere en kategori. I modellen $\\text{l\u00f8n} = \\beta_0 + \\delta_0 \\cdot \\text{kvinde} + \\beta_1 \\cdot \\text{udd} + u$ er $\\delta_0$ l\u00f8nforskellen ved samme uddannelse \u2014 et skift i interceptet.',
    hint: 'Koefficienten angiver skiftet ift. referencegruppen' },

  { topic: 'okonometri', type: 'mc',
    q: 'Hvad er problemet med Linear Probability Model (LPM)?',
    options: ['Koefficienter kan ikke fortolkes som marginaleffekter', 'Modellen kan ikke estimeres med OLS', 'Forudsagte sandsynligheder kan ligge udenfor $[0,1]$', 'Modellen kr\u00e6ver normalfordelte fejlled'],
    correct: 2, hint: 'Alternativ: logit eller probit sikrer $\\hat{P} \\in [0,1]$' },

  // ── VIDENSKABSTEORI ────────────────────────────────────
  { topic: 'videnskab', type: 'text',
    q: 'Hvad er verificeringsprincippet, og hvorfor er det selvmodsigende?',
    a: 'Et udsagn har kun videnskabelig mening hvis det kan efterpr\u00f8ves empirisk. Det er selvmodsigende fordi selve princippet ikke kan verificeres empirisk \u2014 det d\u00f8mmer sig selv som meningsl\u00f8st.',
    hint: 'Logisk positivisme \u2014 Wienkredsen' },

  { topic: 'videnskab', type: 'mc',
    q: 'Hvad g\u00e5r Duhem-Quine problemet ud p\u00e5?',
    options: ['Man kan kun falsificere teorier, aldrig verificere dem', 'Man tester aldrig \u00e9n hypotese isoleret \u2014 altid et bundt af teorier og hj\u00e6lpeantagelser', 'Induktion er logisk ugyldig', 'Normativ og positiv \u00f8konomi kan ikke adskilles'],
    correct: 1, hint: 'Fejler testen, ved man ikke hvad i bundtet der er galt' },

  { topic: 'videnskab', type: 'text',
    q: 'Hvad er Poppers demarkationskriterium og asymmetri?',
    a: 'Demarkation: videnskab adskilles ved falsificerbarhed. Asymmetri: ingen m\u00e6ngde observationer verificerer endeligt en teori, men \u00e9n modstridende observation falsificerer den logisk.',
    hint: 'Alle svaner er hvide \u2014 \u00e9n sort modbeviser det' },

  { topic: 'videnskab', type: 'mc',
    q: 'Hvad illustrerer Russells h\u00f8ne?',
    options: ['At induktion kan begrundes logisk', 'Faren ved induktion: fortidige m\u00f8nstre giver ingen logisk garanti for fremtiden', 'At falsificerbarhed er umulig i praksis', 'At normative udsagn kan testes empirisk'],
    correct: 1, hint: 'H\u00f8nen fodres hver dag \u2014 helt indtil slagtedagen' },

  { topic: 'videnskab', type: 'text',
    q: 'Hvad er Friedmans "as-if" metodologi?',
    a: 'Antagelsernes realisme er irrelevant. Det afg\u00f8rende er om modellen forudsiger pr\u00e6cist. Eksempel: faldformlen $s = \\frac{1}{2}gt^2$ antager vakuum men virker godt nok i praksis.',
    hint: 'Kun forudsigelseskraft t\u00e6ller' },

  { topic: 'videnskab', type: 'mc',
    q: 'Hvad er Lucas-kritikken?',
    options: ['OLS er inkonsistent ved endogene variable', 'Makromodeller baseret p\u00e5 historiske m\u00f8nstre fejler n\u00e5r politikken \u00e6ndres \u2014 agenter \u00e6ndrer forventninger', 'Inflationsm\u00e5l er normative', 'Kausalitet kr\u00e6ver randomiserede fors\u00f8g'],
    correct: 1, hint: 'Strukturelle parametre er ikke policy-invariante' },

  { topic: 'videnskab', type: 'text',
    q: 'Hvad er Revealed Preference (Samuelson)?',
    a: 'Da vi ikke kan m\u00e5le indre nytte direkte, observerer vi faktiske valg. Pr\u00e6ferencer afsl\u00f8res gennem observerbar adf\u00e6rd \u2014 uden at postulere en nytteskala.',
    hint: 'Valg frem for introspektive nyttebegreber' },

  { topic: 'videnskab', type: 'mc',
    q: 'Hvad er forskellen p\u00e5 positiv og normativ \u00f8konomi?',
    options: ['Positiv beskriver fremtiden; normativ beskriver fortiden', 'Positiv siger hvordan verden er (fakta); normativ siger hvordan den b\u00f8r v\u00e6re (v\u00e6rdier)', 'Positiv er falsificerbar; normativ er verifierbar', 'Positiv bruger matematik; normativ bruger filosofi'],
    correct: 1, hint: '"Skatten b\u00f8r s\u00e6nkes" er normativt; "skatten er 22%" er positivt' },

  { topic: 'videnskab', type: 'text',
    q: 'Hvad er korroboration hos Popper?',
    a: 'En teori er korroboreret hvis den har overlevet gentagne fors\u00f8g p\u00e5 falsifikation. Det betyder ikke at den er sand \u2014 blot at den har vist sin styrke hidtil. Korroboration er gradsbestemt og midlertidig.',
    hint: 'Overlevet mange tests er ikke det samme som verificeret' },

  { topic: 'videnskab', type: 'mc',
    q: 'Hvad er induktionsproblemet (Hume)?',
    options: ['At kausalitet ikke kan observeres direkte', 'At vi ikke logisk kan begrundes at fortidige m\u00f8nstre vil gentage sig i fremtiden', 'At teorier aldrig kan falsificeres pga. hj\u00e6lpeantagelser', 'At normative og positive udsagn er identiske'],
    correct: 1, hint: 'Solen er st\u00e5et op hver dag \u2014 ingen logisk garanti for i morgen' }
];
