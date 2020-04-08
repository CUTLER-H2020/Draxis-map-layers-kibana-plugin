module.exports.busRoute = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 1, "bus route": null }, "geometry": { "type": "MultiLineString", "coordinates": [[[-8.307355097252268, 51.803420412241998], [-8.306823288825152, 51.803468244921547], [-8.306567053855714, 51.803525046162591], [-8.306247968799422, 51.803632669370415], [-8.305754837348793, 51.803809051294301], [-8.305290713630548, 51.803976464007462], [-8.304773409069607, 51.804102023134305], [-8.304120735090851, 51.804245518851069], [-8.303820988522839, 51.804254487318204], [-8.30249146745507, 51.804269434759455], [-8.300634972582255, 51.804290361168796], [-8.299817921453334, 51.804302319112701], [-8.29894768948169, 51.804344171891287], [-8.298570588960654, 51.804332213958489], [-8.298386873322208, 51.804287371682307], [-8.298087126754206, 51.804278403221709], [-8.297685853122863, 51.804188718517644], [-8.297311169912879, 51.804089317762205], [-8.297070647465208, 51.803907705289603], [-8.296909291953838, 51.803752997791413], [-8.296323698356472, 51.802861239470758], [-8.296088413416076, 51.802511457120644], [-8.295930482428705, 51.802205519905762], [-8.295822509202642, 51.801997242242706], [-8.295729039842746, 51.801919511576443], [-8.29559205888425, 51.801900577163067], [-8.295500201065023, 51.80190057716306], [-8.295450243303685, 51.801905559904192], [-8.295416400949225, 51.801941435624087], [-8.295379335513386, 51.801981297501563], [-8.295308427723109, 51.801997242242706], [-8.295248800717642, 51.801985283687365], [-8.29518111600874, 51.801964356207947], [-8.295137604410165, 51.801939442529289], [-8.295145662113621, 51.801892604776128], [-8.295147273654315, 51.801866694508782], [-8.295150496735692, 51.801856729017373], [-8.295036077346838, 51.801823842880154], [-8.294961946475183, 51.801804908426583], [-8.294887815603527, 51.801810887728557], [-8.29466703452924, 51.801835801478255], [-8.294399518774986, 51.801862708312477], [-8.294051425986321, 51.801922501219899], [-8.293867710347852, 51.801986280233741], [-8.293635648488728, 51.802083941673857], [-8.293345571164824, 51.802211499154581], [-8.29307483232917, 51.802337063197136], [-8.292796035790085, 51.802462626890005], [-8.292583312419199, 51.802642999519378], [-8.291964480794825, 51.803101401849148], [-8.291429449286239, 51.803539869281401], [-8.291039456439641, 51.803765080441131], [-8.290755825278474, 51.803942458350114], [-8.290346493943613, 51.804185604462099], [-8.290017739643165, 51.804408819410327], [-8.289811462435033, 51.804600145629088], [-8.289514938948347, 51.804831330393398], [-8.289321554065706, 51.805082443535483], [-8.289192630810614, 51.805241879725045], [-8.289108830694758, 51.805540821060639], [-8.288973461276866, 51.805895562206786], [-8.288876768835495, 51.806206456646208], [-8.288651153139051, 51.806632936555701], [-8.288483552907399, 51.806963754641131], [-8.288361075815054, 51.807143112829081], [-8.28816769093241, 51.807398198800456], [-8.287993644538048, 51.807553641106381], [-8.287774475004422, 51.807681183110894], [-8.287587536284541, 51.807896409425204], [-8.287432828378423, 51.808103663423225], [-8.287310351286086, 51.808251132033853], [-8.286975150822892, 51.808462370013963], [-8.286517473267402, 51.808621794249092], [-8.285892195480333, 51.808825059331042], [-8.285221794554001, 51.808984482283343], [-8.284544947464932, 51.809104049127534], [-8.283049437706213, 51.809359124001624], [-8.282379036779906, 51.809430863549899], [-8.282108297944282, 51.809438834603732], [-8.281624835737812, 51.809486660897363], [-8.281205835158874, 51.809518545064904], [-8.281141373531341, 51.809530501621914]]] } }
    ]
};

module.exports.busStops = {
    "type": "FeatureCollection",
    "name": "bus_stop",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 3, "bus top": "bus stop" }, "geometry": { "type": "Point", "coordinates": [-8.302304748064657, 51.804389029045453] } },
        { "type": "Feature", "properties": { "id": 4, "bus top": "bus stop" }, "geometry": { "type": "Point", "coordinates": [-8.302740517088992, 51.804209390694616] } },
        { "type": "Feature", "properties": { "id": 6, "bus top": "bus stop" }, "geometry": { "type": "Point", "coordinates": [-8.307340301234465, 51.803535740503634] } }
    ]
};

module.exports.carParkings = {
    "type": "FeatureCollection",
    "name": "car_park_location",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "ID": "1", "Area": 0, "Potential_": 0, "Descriptio": null }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-8.281559864176742, 51.809435910744128, 0.0], [-8.28156140305426, 51.809452537536792, 0.0], [-8.281451068377271, 51.80946251024811, 0.0], [-8.281400144749764, 51.809467126832764, 0.0], [-8.281327899004506, 51.809466580524564, 0.0], [-8.281277046283408, 51.809463376067441, 0.0], [-8.281227442087175, 51.809449381266361, 0.0], [-8.28120622730197, 51.809442240438514, 0.0], [-8.281180822444661, 51.809434480363819, 0.0], [-8.281158973854366, 51.809421587796749, 0.0], [-8.281100265875285, 51.809424604761347, 0.0], [-8.281060688481411, 51.809426587138518, 0.0], [-8.281050140392262, 51.809442164090306, 0.0], [-8.281022251287601, 51.809458052163691, 0.0], [-8.280979133230399, 51.809467684003906, 0.0], [-8.280946269308863, 51.809472167347472, 0.0], [-8.28056408184003, 51.809464989248092, 0.0], [-8.28055082648444, 51.809391307406237, 0.0], [-8.280525871135637, 51.809263267316609, 0.0], [-8.280104711763542, 51.808159108461076, 0.0], [-8.280343651175487, 51.808154673646364, 0.0], [-8.280751704925121, 51.808303554312147, 0.0], [-8.281456319096012, 51.808346817311225, 0.0], [-8.281446871254134, 51.80846217454792, 0.0], [-8.281450208429387, 51.808517901141769, 0.0], [-8.28145393814717, 51.808540635520053, 0.0], [-8.281461393674821, 51.80858547502396, 0.0], [-8.281468835537932, 51.808704926979843, 0.0], [-8.281474625956161, 51.808828068559166, 0.0], [-8.28147162848294, 51.808865292047834, 0.0], [-8.281482468143066, 51.808954171742492, 0.0], [-8.281496599630069, 51.809033874318878, 0.0], [-8.281500811749334, 51.809057236800371, 0.0], [-8.281511909202548, 51.809149082390093, 0.0], [-8.281528599152061, 51.809293862434174, 0.0], [-8.281559864176742, 51.809435910744128, 0.0]]]] } },
        { "type": "Feature", "properties": { "ID": "3", "Area": 0, "Potential_": 0, "Descriptio": null }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-8.280414024305673, 51.806986416773768, 0.0], [-8.28040050651965, 51.806928107471123, 0.0], [-8.280385270827475, 51.80682422574673, 0.0], [-8.280355036403805, 51.806673904314287, 0.0], [-8.280333834699363, 51.806552956844243, 0.0], [-8.280321727777251, 51.806490688806633, 0.0], [-8.280312887081402, 51.806453673340201, 0.0], [-8.280319116812054, 51.805741963581177, 0.0], [-8.280631539990674, 51.805747870642449, 0.0], [-8.281008573571997, 51.805758297017178, 0.0], [-8.281316379746219, 51.805771764431853, 0.0], [-8.281645956022254, 51.805766570737305, 0.0], [-8.282007887919178, 51.805771726298403, 0.0], [-8.282294697406831, 51.805774364263975, 0.0], [-8.282554786218313, 51.805788032867213, 0.0], [-8.282453337233466, 51.805974448138898, 0.0], [-8.282347676899626, 51.806195213134906, 0.0], [-8.282230853167896, 51.806428769840132, 0.0], [-8.282119518418163, 51.806679662892265, 0.0], [-8.28205606822111, 51.806822927154464, 0.0], [-8.281836155441127, 51.806770326738835, 0.0], [-8.281403666592185, 51.806671489628528, 0.0], [-8.281049404588064, 51.806612287270362, 0.0], [-8.281028327531606, 51.806607842914431, 0.0], [-8.280946270456964, 51.806586644083431, 0.0], [-8.280811689181641, 51.80654291720986, 0.0], [-8.280827078037575, 51.806555825272369, 0.0], [-8.280811689181641, 51.80654291720986, 0.0], [-8.280790436658593, 51.806548721204784, 0.0], [-8.280759335760116, 51.806567133940248, 0.0], [-8.280697135337578, 51.806642703917596, 0.0], [-8.280625100777605, 51.806733219816877, 0.0], [-8.280537210585903, 51.806851281214918, 0.0], [-8.280450978689945, 51.806966821543625, 0.0], [-8.280415833991619, 51.807027494247663, 0.0], [-8.280414024305673, 51.806986416773768, 0.0]]]] } },
        { "type": "Feature", "properties": { "ID": "4", "Area": 0, "Potential_": 0, "Descriptio": null }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-8.308805076051362, 51.803492465788999, 0.0], [-8.308967057314144, 51.803462098814869, 0.0], [-8.309185165687353, 51.803429054324539, 0.0], [-8.309410028034312, 51.803376757546715, 0.0], [-8.309546108467861, 51.80334269735382, 0.0], [-8.309580111471961, 51.803576537867272, 0.0], [-8.309420581290622, 51.803558795495846, 0.0], [-8.309290637101183, 51.803555441496385, 0.0], [-8.309130376769536, 51.803565691969325, 0.0], [-8.30882366525679, 51.803679669326016, 0.0], [-8.308081906113879, 51.803737437612888, 0.0], [-8.308075284093755, 51.803582195340859, 0.0], [-8.308036006843258, 51.803512821327587, 0.0], [-8.308805076051362, 51.803492465788999, 0.0]]]] } }
    ]
};

module.exports.cycelway = {
    "type": "FeatureCollection",
    "name": "cycelway",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 1, "Cycleway": "Greenway" }, "geometry": { "type": "MultiLineString", "coordinates": [[[-8.371510429622109, 51.811093713717476], [-8.371503874271573, 51.811122083912458], [-8.371500596596302, 51.811122083912458], [-8.371130219291008, 51.811280146100493], [-8.370943391800727, 51.811294331141539], [-8.370304245123446, 51.811294331141546], [-8.370084640880483, 51.811288251838796], [-8.369796205456888, 51.811255828876874], [-8.369340608594623, 51.811223405891646], [-8.368652296788323, 51.81118085068816], [-8.368042649188451, 51.811178824248891], [-8.367695215610034, 51.811150454089606], [-8.367347782031617, 51.811160586291415], [-8.3668561307414, 51.811124110354328], [-8.366312036646894, 51.811085607944236], [-8.365990824470625, 51.811081555057044], [-8.365033743292337, 51.810953888924139], [-8.364335598460229, 51.810797852048388], [-8.363814448092603, 51.810645867559124], [-8.363453903813111, 51.810556703086895], [-8.362890143666995, 51.810354055903048], [-8.361946173189782, 51.810094666178237], [-8.36160857263717, 51.810033871495527], [-8.360982536660961, 51.809936599832646], [-8.360402388138509, 51.809885937425079], [-8.359874682420342, 51.809861619449215], [-8.359474806037634, 51.809863645947715], [-8.359107706407604, 51.809883910927596], [-8.358701274674358, 51.809894043414118], [-8.356821527908101, 51.80996041114453], [-8.356515065270536, 51.80998118270422], [-8.355825934045415, 51.810019179434939], [-8.354939322885395, 51.810070854937287], [-8.35378885886629, 51.810115437676053], [-8.353057937281505, 51.810093146312198], [-8.35252695388807, 51.810062748980059], [-8.351533818281832, 51.809949265425665], [-8.350891393929285, 51.80986009957531], [-8.350288301679955, 51.809750668517879], [-8.349937590426267, 51.80965947576707], [-8.349599989873653, 51.809529779092536], [-8.348424943290038, 51.809135620502047], [-8.347062249797322, 51.808647730480565], [-8.345945381949715, 51.808246977820836], [-8.345619253260539, 51.808126396677203], [-8.34422788010923, 51.807621776290794], [-8.344035316687227, 51.807560978272555], [-8.343370768026622, 51.807326905136719], [-8.342972530481546, 51.807169842394437], [-8.341540186389391, 51.806557799132015], [-8.341186197460431, 51.806339934044651], [-8.339111429015718, 51.804936452311765], [-8.338904935473828, 51.804788501510942], [-8.338432950235219, 51.804498678671983], [-8.337997019424563, 51.804322351977198], [-8.337790525882674, 51.804243308752199], [-8.337446369979522, 51.804182506177106], [-8.336898998209747, 51.804121703520039], [-8.336309016661488, 51.804042659943242], [-8.33490125513384, 51.803876465304057], [-8.334389937792013, 51.803828836239632], [-8.334204749139364, 51.803809581922685], [-8.333524631521234, 51.803679868415422], [-8.333254223311611, 51.803625145417598], [-8.332695379678398, 51.803358623200808], [-8.332390555878467, 51.803170131252166], [-8.332170951635504, 51.803039402502364], [-8.330891019443309, 51.802198270472317], [-8.330343647673535, 51.801876001271367], [-8.330022435497261, 51.80167939565893], [-8.329766776826348, 51.801549676022482], [-8.329399677196319, 51.801428063524348], [-8.329130907824336, 51.801355095868004], [-8.328596646755637, 51.801280101209251], [-8.328016498233183, 51.801239563503927], [-8.327541235319305, 51.80125983236114], [-8.327115137534452, 51.801324692642993], [-8.326725094177547, 51.80140171410649], [-8.326230165212065, 51.801547649150187], [-8.326230165212065, 51.801547649150187], [-8.325712292519707, 51.801809114922122], [-8.325351748240214, 51.802074632875126], [-8.325099367244571, 51.802285424640367], [-8.32494531650697, 51.802431356823561], [-8.32456510617587, 51.802767809779276], [-8.324260282375937, 51.803000893185931], [-8.324070177210384, 51.803128581845627], [-8.323932514849126, 51.803225868200748], [-8.323391698429887, 51.803696082624199], [-8.322841048984845, 51.804214934227339], [-8.322651763238113, 51.804448516837638], [-8.3224780464489, 51.804637510124564], [-8.322399382242468, 51.804740873410111], [-8.32218141683714, 51.804982053488111], [-8.321860204660862, 51.805302273782544], [-8.321807761856576, 51.805340781133083], [-8.321545547835125, 51.80539347534895], [-8.321135838426612, 51.805419822433777], [-8.320860513704091, 51.805431982621599], [-8.320270532155835, 51.805430969272706], [-8.319821490644102, 51.805413742338629], [-8.319139734188338, 51.805356994744514], [-8.318510420536862, 51.805247552754096], [-8.317913883638065, 51.805046908414973], [-8.317366511868293, 51.804846263182753], [-8.317015800614607, 51.80475303378109], [-8.316134105967484, 51.804576708081179], [-8.315612955599855, 51.804485504862328], [-8.314967253572041, 51.804367953774744], [-8.314393660400123, 51.804250402380639], [-8.312279559852195, 51.803855184238955], [-8.311656801551255, 51.803761952787632], [-8.311138928858895, 51.803648453369235], [-8.310614500815996, 51.803620078469997], [-8.309873746205406, 51.803595757113584], [-8.309614809859223, 51.8035977838938], [-8.309409955154967, 51.803573462525321], [-8.309195267424906, 51.803571435744018], [-8.308970746669043, 51.803641359646107], [-8.308819973606708, 51.803700136175529], [-8.308475817703558, 51.80372040392654], [-8.308115273424066, 51.803744725215708]]] } },
        { "type": "Feature", "properties": { "id": 2, "Cycleway": null }, "geometry": { "type": "MultiLineString", "coordinates": [[[-8.308098397039187, 51.803746846501902], [-8.308065927478689, 51.803739760226009], [-8.308052557659655, 51.80360393972277], [-8.308014358176717, 51.803521266172631], [-8.307916949495217, 51.803495283025562], [-8.307861560244952, 51.8034822914464], [-8.307815720865422, 51.803470480916658]]] } },
        { "type": "Feature", "properties": { "id": 2, "Cycleway": null }, "geometry": { "type": "MultiLineString", "coordinates": [[[-8.307816930092928, 51.803470249264691], [-8.307719335988631, 51.803465571096368], [-8.307344846983758, 51.803458553842987], [-8.307294915116444, 51.803460892927575], [-8.307237417814687, 51.803467910180593], [-8.306946148588679, 51.8034870906666], [-8.306749447293189, 51.803517966553784], [-8.306579981561693, 51.80354977805176], [-8.306151777972286, 51.803706028318921], [-8.305522333826726, 51.803945548635134], [-8.304983674894471, 51.804098990668969], [-8.304348178401359, 51.804252432180519], [-8.304021351633473, 51.804299213025296], [-8.303046923677368, 51.804302955490769], [-8.302435636574469, 51.804306697955937], [-8.301178261370241, 51.804322603429455], [-8.300218964283021, 51.804338508897352], [-8.299831614039599, 51.804344122590571], [-8.299259667195802, 51.804366577356447], [-8.298811793476846, 51.804377804735211], [-8.298569699574708, 51.804364706126393], [-8.298409312364543, 51.804329152740458], [-8.298123338942645, 51.804312311653128], [-8.297817695391192, 51.804253367797884], [-8.297477250841311, 51.804183196441201], [-8.29731383745737, 51.804119574316722], [-8.29718068581119, 51.80403911091301], [-8.296980958341925, 51.803878183674826], [-8.296878068433518, 51.803747195963822], [-8.296643539965821, 51.803415046847647], [-8.296483152755654, 51.803179266271577], [-8.296325791719262, 51.802944420106869], [-8.296104881033562, 51.802623492891719], [-8.295880944174083, 51.802208061850259], [-8.295784106613231, 51.802000344893976], [-8.295702399921257, 51.801940462350487], [-8.295614640881734, 51.801925491702193], [-8.29553293418976, 51.801923620370822], [-8.295445175150236, 51.801932977026979], [-8.295427018107578, 51.801985374265577], [-8.295363468458264, 51.802007830206342], [-8.295227290638312, 51.802017186845013], [-8.295178871857885, 51.801981631607688], [-8.295079008123251, 51.801976017620312], [-8.294985196736175, 51.802000344893976], [-8.294861123611328, 51.802030286135903], [-8.294776390745582, 51.802101396505776], [-8.294661396142066, 51.802296013786567], [-8.294516139800781, 51.802464431909186], [-8.294395092849715, 51.802647819816045], [-8.294280098246196, 51.802868632836464], [-8.294122737209809, 51.803160553474612], [-8.293953271478312, 51.803295285439283], [-8.293820119832136, 51.803467442363747], [-8.293565921234894, 51.803714448976599], [-8.293378298460734, 51.803924029283749], [-8.293093838125722, 51.804148578531631], [-8.292984895869759, 51.804219685560291], [-8.292900163004013, 51.804421778608308], [-8.292754906662729, 51.804623870750376], [-8.292645964406768, 51.804837189250762], [-8.292567283888575, 51.805099157957983], [-8.292422027547291, 51.805480881063126], [-8.292264666510903, 51.80582517756185], [-8.292216247730474, 51.805944932249368], [-8.292083096084296, 51.806034748056199], [-8.291550489499592, 51.806139532938019], [-8.291296290902348, 51.806206894519129], [-8.290981568829569, 51.806289225203763], [-8.290606323281255, 51.80641646323884], [-8.290170554257408, 51.806641000071629], [-8.289831622794415, 51.806798175189094], [-8.289625842977596, 51.806962834248154], [-8.289371644380353, 51.80719485281049], [-8.289214283343961, 51.80738196368435], [-8.289008503527144, 51.807696308203965], [-8.288657467369045, 51.808063040706195], [-8.288463792247333, 51.808220210865187], [-8.288143017827004, 51.808534549539004], [-8.287991709138165, 51.808687975952722], [-8.287628568284958, 51.809006053439461], [-8.287313846212179, 51.809282966129615], [-8.286527041030233, 51.809485036478435], [-8.286151795481919, 51.809612265492582], [-8.28528025743422, 51.809791882312858], [-8.284602394508235, 51.809919110460811], [-8.284093997313745, 51.809926594458346], [-8.283634018899683, 51.809986466393745], [-8.283258773351367, 51.809986466393759], [-8.282641433900917, 51.810046338249613], [-8.281800157590988, 51.810087500104395]]] } }
    ]
};

module.exports.evChargers = {
    "type": "FeatureCollection",
    "name": "ev-charger",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 1 }, "geometry": { "type": "Point", "coordinates": [-8.308128783303806, 51.803583150314459] } },
        { "type": "Feature", "properties": { "id": 2 }, "geometry": { "type": "Point", "coordinates": [-8.309479735833147, 51.803508355803764] } },
        { "type": "Feature", "properties": { "id": 3 }, "geometry": { "type": "Point", "coordinates": [-8.281441741784509, 51.809362370535965] } },
        { "type": "Feature", "properties": { "id": 4 }, "geometry": { "type": "Point", "coordinates": [-8.281309487095834, 51.808392393669756] } },
        { "type": "Feature", "properties": { "id": 5 }, "geometry": { "type": "Point", "coordinates": [-8.280429309338539, 51.808902762006717] } },
        { "type": "Feature", "properties": { "id": 6 }, "geometry": null },
        { "type": "Feature", "properties": { "id": 7 }, "geometry": { "type": "Point", "coordinates": [-8.28210301522974, 51.806274726295307] } },
        { "type": "Feature", "properties": { "id": 8 }, "geometry": { "type": "Point", "coordinates": [-8.280452111871744, 51.806184490588699] } }
    ]
};

module.exports.ferryRoute = {
    "type": "FeatureCollection",
    "name": "ferry_route",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 1, "New ferry": null }, "geometry": { "type": "MultiLineString", "coordinates": [[[-8.278349044872261, 51.81070342997139], [-8.286307050817397, 51.828398232104625], [-8.290194931584487, 51.830500618568514], [-8.293353834707748, 51.831902155024622], [-8.294001814835596, 51.833453805225851], [-8.293839819803635, 51.836006403749032], [-8.291450393082194, 51.837382744867902], [-8.290478422890422, 51.83748284076276], [-8.290397425374438, 51.839084344818353], [-8.290883410470325, 51.841236276192546], [-8.292604607684925, 51.847341196022946], [-8.293657575392682, 51.84961781891171]]] } },
        { "type": "Feature", "properties": { "id": 2, "New ferry": null }, "geometry": { "type": "MultiLineString", "coordinates": [[[-8.275827997187331, 51.809754031151122], [-8.276465852625684, 51.810905826694103], [-8.286367798954382, 51.828398232104618], [-8.293455081602731, 51.831877127970365], [-8.294103061730581, 51.833654014260873], [-8.293657575392684, 51.836256650717999], [-8.291470642461194, 51.837357720859444], [-8.290377175995449, 51.837432792843167], [-8.290579669785403, 51.839784984930326], [-8.291268148671241, 51.842637478537917], [-8.292645106442921, 51.847216103515812], [-8.293434832223737, 51.849127896054604], [-8.293664325185684, 51.849632412276733]]] } }
    ]
};

module.exports.footpath = {
    "type": "FeatureCollection",
    "name": "footpath_location",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 1, "footpath": "Proposed new Footpath" }, "geometry": { "type": "MultiLineString", "coordinates": [[[-8.2817838457843, 51.810078498272048], [-8.280685316973805, 51.810000250787787], [-8.280644818215816, 51.80999399098318], [-8.280634693526316, 51.809962691947092], [-8.28161172606284, 51.809796806692972], [-8.281672474199825, 51.809756117763804], [-8.281631975441835, 51.809727948483648], [-8.281505416823114, 51.80970603903134], [-8.280913122487503, 51.809596491610066], [-8.28092830952175, 51.809540152832604]]] } }
    ]
};

module.exports.pierUpgrade = {
    "type": "FeatureCollection",
    "name": "pier_upgrade_locations",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 1, "docks": "west Harbour" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-8.278558400842757, 51.810690670376246], [-8.27811721758842, 51.810704840074386], [-8.27813154172015, 51.81030808684195], [-8.278211756857285, 51.810350596283911], [-8.278443807789758, 51.810364766089002], [-8.278458131921376, 51.810435615047588], [-8.278549806363841, 51.810409046701153], [-8.278558400842757, 51.810690670376246]]]] } },
        { "type": "Feature", "properties": { "id": 2, "docks": "East Harbour" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-8.276413849151238, 51.809717917226251], [-8.276056318825635, 51.809783099207685], [-8.276043713589802, 51.809751216728543], [-8.275779003637188, 51.809810022172506], [-8.275706810013762, 51.809778848211771], [-8.275822548997407, 51.809608808046335], [-8.276284359001313, 51.809513868674898], [-8.276356552624737, 51.809569840418078], [-8.276413849151238, 51.809717917226251]]]] } }
    ]
};