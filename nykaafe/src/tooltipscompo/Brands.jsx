import React from 'react'
import { useNavigate } from 'react-router-dom';

function Brands({ heading, setHeading }) {
    const navigate = useNavigate('')
    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };
    const A = ["A Big Indian Story", "A Clutch Story", "A Fragrance Story", "A'kin", "Aadita", "AANCHAL SAYAL", "AAPNO RAJASTHAN", "Aaranyaa", "Aaruvi Ruchi Verma"
        , "Aastey", "Aatmana", "Abdesigns", "ABELARDO DE MODA", "Abelino", "Abena", "Absorbia", "Accessher", "Accessorize London", "Ace Nutrimony", "ACE THE SPACE", "Acne Squad"
        // , "Acne-X Topical", "Acnestar", "Actifit", "Adam Wulf", "Addery", "Addons", "Adhyay", "adidas", "Adidas Fragrances", "adidas Originals", "Adigo", "Adira", "ADITI WASAN"
        // , "Adwitiya", "ADYA", "Aeropostale", "Aesthetic Bodies", "AESTHETIC NATION", "Affaires", "AFFOREST", "Aflairza", "Afzal", "Agaro", "Agro Composites", "Ahaglow", "AHC"
        // , "Aigner", "Ajmal India", "Akira Furnishings", "Akiva", "Akulya Jewels", "Alainne", "Alan Truman", "ALANNA", "Albatross", "Alberto Torresi", "Alcis", "Alcove",
        // "Aldo", "Aleva Naturals", "Alexandre Christie", "Alexandre. J", "ALFAPARF MILANO", "Alicia Souza", "ALiX AViEN PARIS", "All Good Scents", "Allen Solly",
        // "Allin Exporters", "Allure", "alo", "Aloe Veda", "Alograce", "Alpecin", "Alphavedic", "Alpino", "ALSO-A LOOK TO STAND OUT", "Alyssa Ashley", "amag Beauty",
        // "Amalfiee Ceramics", "Amaltaas", "Amante", "Amaya Decors", "AMAzing EARTH", "Amazon", "Amazon Series", "Amazonas", "Ambi Pur", "Ambrane", "Ame", "Amefa",
        // "American Eagle", "Aminu", "Amoli Concepts", "AMOUROUD", "Amouve", "Amritam by Good Earth", "AMYRA", "Ana Hickmann", "Anaar", "Anastasia Beverly Hills",
        // "ANCHOR HOCKING", "Ancient Flower", "Ancient Living", "And", "And Also", "AND Fragrances", "Andis", "andMe", "Andreas Osten", "Anekaant", "Angeline", "Angie Homes"
        // , "Angloindu", "Anika's Creations", "Anko", "Anna Claire", "Anne Klein", "Anomaly", "Ansee by Addery", "Ansell", "Anthi", "Antonio Banderas", "ANUSHKA JAIN JEWELLERY"
        // , "Anveya", "AOMIDORI SHIMAI", "Aphrodyte Me", "Apieu", "Aqualogica", "Aramis", "Aramusk", "Arata", "Aravi Organic", "Archies", "Arganicare", "Argatin", "ARHAT ORGANIZERS"
        // , "Ariel", "Aries Gold", "Aristocrat", "Ariul", "ARMAF", "ARMANI EXCHANGE", "Aroma Care", "Aroma Magic", "Aroma Treasures", "AromaMusk", "Aromatique", "ART & PARFUM"
        // , "Art Vibes", "Arth", "Artifice", "Artisan Lab", "Artsy Design Co.", "Aryanveda", "asa", "Asaya", "Ashnam", "Ashpveda", "Asics", "Asmitta", "Aspen", "Assemblage"
        // , "Assembly", "Astaberry", "Astrid", "At Home by Nilkamal", "ATARSTORY", "Atelier Des Ors", "Athlisis", "Attar Ayurveda", "Atulya", "August Bioscience"
        // , "Auguste Skin", "Aulerth", "Auli", "AURA STUDIO", "Auraa Trends", "AuraVedic", "Aureana", "Auric", "Avasha", "Aveda", "Aveeno", "Avene", "AVI-8", "Avimee Herbal",
        // "Avior Jewels", "Avnii Organics", "Avon", "AVYYA", "Awestuffs", "Axe", "Axiom", "Axis-Y", "AY", "AYA", "AyouthVeda", "Ayuga", "Ayusoul Ayurveda", "Ayuveer", "AYUVYA",
        // "Azafran", "Azah", "Azai by Nykaa Fashion", "Azani", "Azzaro"]
    ]

    const B = ["Babila", "BABY FOREST", "Babyliss", "Babymama", "Bacca Bucci", "BadgePack Designs", "baes CLUB", "Baesic", "BAEYORK", "Bag of Small Things", "BAGATT", "Baggit"
        , "Bagsy Malone", "Baidyanath", "Baise Gaba", "Bajaj", "BAKE", "Baked Beauty", "Baldessarini", "Balenzia", "Baller Athletik", "Balzano", "Bambo Nature", "Banana Republic"
        // , "Bangalore Refinery", "BANILA CO", "Bansri", "Baomi", "Barbie", "Barcode Professional"
    ]
    // BarCraft
    // Bare Anatomy
    // Bare Body Essentials
    // Bare Body Plus
    // Bare Essentials
    // bare wear
    // Basicare
    // Bata
    // Bata Comfit
    // Bath & Body Works
    // Batiste
    // BATTLE CRY FOR MEN
    // BaubleBar
    // Bausch & Lomb Accessories
    // Baylis & Harding
    // BBETTER
    // BBlunt
    // BCBGMAXAZRIA
    // Be Bodywise
    // Be Care Love Superfoods
    // BE SOULFULL
    // BeAbhika
    // BEARDBURYS
    // Beardhood
    // Beardo
    // Beatitude Essentials
    // beatXP
    // Beauprty
    // Beauté Secrets
    // Beautiliss
    // Beauty Gang Experts
    // Beauty Garage
    // Beauty of Joseon
    // Beauty People
    // Beautywise
    // Bebe Nature
    // Bedgasm Sleepwear
    // Beebaby
    // Beeone
    // Behno New York
    // BEL AVENIR
    // belif
    // Bella
    // Bella Vita Organic
    // Bella Voste
    // Belleven
    // Bellofox
    // Belora
    // BELWABA
    // Ben Sherman
    // Benefic
    // Benefit Cosmetics
    // Bentley
    // Bentodent
    // beplain
    // BePlush
    // Berdoues
    // BergHOFF
    // Berina
    // Beromt
    // Berry's Intimatess
    // Bespoke London
    // Best Life
    // Best of Makeup Kits & Combos
    // Better Body Bombay
    // Better Nutrition
    // Betty Barclay
    // Beurer
    // Beverly Hills Polo Club
    // Bewakoof
    // bGREEN
    // BH Cosmetics
    // Bhaane
    // Bharat & Dorris
    // Bharatasya
    // BIANCA
    // Biba
    // BiE - Beauty In Everything
    // Bigen
    // Bigflex
    // Bigotti
    // Biker's
    // Billie Eilish
    // Biluma
    // Bindt Beauty
    // Bio Oil
    // Bio-essence
    // Bioblush
    // Biocule
    // Bioderma
    // Bioever
    // BioExotica
    // Bionova
    // Biore
    // Biosoft
    // Biotique
    // Biotop Professional
    // BIOZOMA
    // Bipha Ayurveda
    // Blackmores
    // BLANC9
    // Blank Slate Home
    // BLANKO
    // Blend Oud
    // Blenior
    // Bliscent
    // Bliss Of Earth
    // Blissclub
    // Bloomsberry
    // BLOOVS SPORTS
    // Blue Giraffe
    // Blue Heaven
    // Blue Nectar
    // Blueberry
    // BLUR
    // Blush9 Maternity
    // BlushBee Beauty
    // BLUSHLIN
    // BMW
    // boAt
    // Bobbi Brown
    // bobi
    // BODD ACTIVE
    // Bodify
    // Bodum
    // Body & Fragrance
    // Body Cupid
    // Body Fantasies
    // Body Smith
    // Bodycare
    // BodyFirst
    // Bodyguard
    // BodyHerbals
    // Boericke & Tafel
    // Bohemia Crystal
    // Boho Botanist
    // BOIS 1920
    // Bold Care
    // Boldfit
    // BOLON
    // Bomb Cosmetics
    // Bombae
    // Bombay Dyeing
    // Bombay Shaving Company
    // Bon Organics
    // Bon Parfumeur
    // Bonayu
    // Bond No.9
    // Bonhomie
    // Bonjour
    // Bontress
    // Bormioli Rocco
    // Boroplus
    // Borosil
    // Boss
    // BOSTON LEVIN
    // Botanic Hearth
    // BOTNAL
    // Boujee Beauty
    // Boujee Tribe
    // BOULEVARD
    // Boutique Living
    // Bowtoes
    // Brabantia
    // BRACHY
    // Bralux
    // Brand
    // Brand
    // Brand
    // Braun
    // BRAVE ESSENTIALS
    // Brick Brown
    // Brik
    // Brillare
    // "Brinton"
    // "Brioni"
    // "Briyo"
    // "Bronson Professional"
    // "Brown Bear"
    // "Bruno Manetti"
    // "Brut"
    // "Bruun & Stengade"
    // "Brwn"
    // "BRYAN & CANDY"
    // "BSN"
    // "BSTORIES"
    // "BTN"
    // "Buds & Berries"
    // "Buff"
    // "Bugatti"
    // "Bulchee"
    // "Bummer"
    // "Bumtum"
    // "BUNGALOW BEAUTY"
    // "Burberry"
    // "Burberry Accessories"
    // "Burleigh"
    // "Buti Pure"
    // "ButtChique"
    // "Butter London"
    // "BVLGARI"
    // "By Nature"
    // "By Terry"
    // "By Wishtrend"
    // "BySak "]

    const C = ["C.A.L Los Angeles", "C2P Pro", "C9 Airwear", "Cacharel", "CADIVEU", "Caim by Arelang", "Calcimax", "Call It Spring"
        , "Callesta", "Calvadoss", "Calvin Klein", "Camay", "Campus", "Candere by Kalyan Jewellers", "Candes", "Candyskin", "Canon", "Caprese"]
    // Captain Zack
    // CARAN D'ACHE
    // Carbamide Forte
    // Carefree
    // Caresmith
    // CARLO ROMANO
    // Carlos Philip
    // Carlton London
    // Carlton London Perfume
    // Carmesi
    // Carolina Herrera
    // Carolina Herrera Accessories
    // CARPISA
    // CARRERA
    // Carrera Accessories
    // CARRIALL
    // Carry City
    // Casa Luna Decor
    // CasaGold
    // Casaveda
    // Casio
    // Casmara
    // Catwalk
    // Caudalie
    // Cava Athleisure
    // Cavalli Class
    // CAVIAR OF SWITZERLAND
    // Celimax
    // Centrum
    // CeraVe
    // Cerruti 1881
    // Cerulean Skincare
    // Cetaphil
    // CGG Cosmetics
    // Chambor
    // Chandrika
    // Character
    // Charlotte Raffaelli
    // Charlotte Tilbury
    // Charmacy Milano
    // Charmis
    // Chemist at Play
    // Chemistry
    // CHERE
    // Cheryl's Cosmeceuticals
    // Chicco
    // Chicnutrix
    // Chik
    // Chilife
    // Chilli Beans
    // CHIPMUNK
    // Chisel
    // CHKOKKO
    // Chloé
    // Chopard
    // Chris Adams
    // Christine Valmy
    // Chrysante
    // Chumbak
    // Churchill & Company
    // Ciaté London
    // Ciel
    // CIGA DESIGN
    // Cinch Home
    // CINEMA SECRETS
    // Cinthol
    // CIRCLE SKINCARE
    // Citizen
    // Citta
    // CLARA
    // Clarins
    // CLAY CRAFT
    // ClayCo
    // Clean & Clear
    // Clean & Dry
    // Clean Beauty
    // Clensta
    // Clinic Plus
    // Clinique
    // CLOG LONDON
    // Close-Up
    // Closet Code
    // Clotche
    // Clovia
    // Clt.s
    // Club R
    // CMGE
    // Coach
    // Coach Accessories
    // COAL Clean Beauty
    // Cobblerz
    // Coco Baya
    // Coco Roots
    // Coco Soul
    // COCOBEE HOME LINENS
    // Cocomo
    // Cole & Mason
    // Colgate
    // Color Chemistry
    // Color Fx
    // Color Mate
    // Colorbar
    // Coloressence
    // ColorPlay
    // ColorPlus
    // Colors Queen
    // ColorSoul
    // Colour Me
    // ColourPop
    // Columbia
    // Conscious Chemist
    // Converse
    // Coral Haze
    // Core & Pure
    // Core Asana
    // CORE Designed by SPACES
    // Corioliss
    // Corseca
    // Cortina
    // Cos-IQ
    // Cosa Nostraa
    // Cosco
    // Cosmetica
    // Cosmus Skincare
    // COSRX
    // COSSE
    // Cottsberry
    // Courtyard
    // CR7
    // Crazy Color
    // Crazy Owl
    // Creed
    // Crimsoune Club
    // Cristiano Ronaldo
    // Crocodile
    // Crocs
    // Cross
    // Crown
    // CSC
    // Cukoo
    // Cultsport
    // Curae Health
    // Curaprox
    // Cureskin
    // Curio Cottage
    // Curl Up
    // Curlin Professional
    // Curlvana
    // Curvy Love
    // Curwish
    // Cuticolor
    // CXL
    const D = ["d'you", "D1 Milano", "Da Firenzie", "Da Intimo", "Da Milano", "Dab to Fab", "Dabur", "Dafni", "Daily Life Forever52"
        , "DailyObjects", "Daisy Dixon", "Dame", "Daniel Klein", "Daniel Wellington", "Dartington", "Dashing Diva", "DASTOOR", "Daughter Earth"
    ]
    // David Beckham
    // David Beckham Accessories
    // David Jones
    // Davidoff
    // DAX
    // Dazller Eterna
    // dBasic
    // DDecor Live Beautiful
    // De Fabulous
    // De Vivre
    // Dear Dahlia
    // Debasreee
    // DeBelle
    // Deborah
    // Deconstruct
    // DecorTwist
    // Delize
    // Delsey
    // Denim
    // DENOVA
    // DentoShine
    // Depiwhite
    // Derek Lam
    // Derma B
    // Derma Decode
    // Derma E
    // Derma Essentia
    // DERMABAY
    // Dermacol
    // Dermafique
    // Dermalogica
    // Dermatouch
    // Dermavive
    // Dermawear
    // Dermicool
    // DERMINA
    // DERMISTRY
    // Design Gaatha
    // Designbox
    // Designs & You
    // Dettol
    // Deuter
    // Devano
    // Deve Herbes
    // Devina Juneja
    // Dewytree
    // Dexe
    // DHC Beauty
    // Dhwani Bansal
    // DIAM BEAUTY
    // Diana Korr
    // Dicora Urban Fit
    // Dida
    // Diego dalla Palma Milano
    // Diesel
    // Diesel Accessories
    // Digital Dress Room
    // DIOR
    // Disguise Cosmetics
    // Disney Fashion
    // Diva Divine
    // Divas Mantra
    // DIVE
    // Divyaa
    // Diwaah
    // Diya Aswani
    // DJOKR
    // DKNY
    // DL WOMAN
    // Doctor Towels
    // DoggyMan
    // Dolce&Gabbana
    // DOMIN8
    // DonaBella
    // Doodle Collection
    // Dorall Collection
    // Dot & Key
    // Dove
    // Doxa
    // Dr Teal's
    // Dr. Barbara Sturm
    // Dr. Different
    // Dr. G
    // Dr. Morepen
    // Dr. Odin
    // Dr. Ortho
    // Dr. Sakhiya
    // Dr. Sheth's
    // Dr. Trust
    // Dr. Vaidya's
    // Dr. Vranjes Firenze
    // Dr.Batra's
    // Dr.Foot
    // Dr.Jart+
    // Drape In Vogue
    // Dreams
    // Dromen & Co
    // Drunken
    // Dsquared
    // DSquared2
    // Ducati
    // Ducati Corse
    // Dugran By Dugristyle
    // Duke
    // Durex
    // duroflex
    // Duxot
    // Dynamocks
    // Dyson

    const E = ["e.l.f. Cosmetics", "E2O", "Earnshaw", "Earth Bags", "Earth Rhythm", "Earth Science Ayurveda", "earthBaby", "Earthika"
        , "Earthraga", "EASTHIDE", "Eat Anytime", "Ebel", "Eco Corner", "Ecoberry", "Ecofynd", "EcoRight", "ECOVANI", "eCraftIndia"]
    // ED Hardy Fashion
    // EDIFIER
    // EFG Store
    // EIGHT & BOB
    // Ekaa Handicrafts
    // Ekhasa
    // Ek_agga
    // El Clasico
    // El Naturalista
    // Elchim
    // Elemis
    // ELFEN
    // Elie Saab Accessories
    // Elina
    // Elitty
    // ELIXURY
    // Elizabeth Arden
    // Elle
    // Elle 18
    // Ellement Co.
    // Ellementry
    // Ellips
    // Elovera
    // Elvey Essentials
    // Emami
    // Embark
    // Embryolisse
    // Emilio Pucci
    // EMPORIO ARMANI
    // Enamor
    // Enamor XO
    // Encasa Homes
    // Enchanteur
    // Endura
    // Energy Strings
    // Enerzal
    // Engage
    // ENN
    // Enoki
    // Enrico
    // eOnz
    // Epique Switzerland
    // Episoft
    // Epitight
    // EPURE DERMA
    // Equal
    // Eridani
    // Ermenegildo Zegna
    // Erotissch
    // Esbeda
    // Escada Accessories
    // Eske
    // Esprit
    // ESPRIT Accessories
    // Essence
    // Essentia Extracts
    // Essenza Di Wills
    // Essgee
    // Estee Lauder
    // Estele
    // Esther Parfumerie
    // ETAT LIBRE D'ORANGE
    // ETCETERA
    // Eternal Love
    // Eternia
    // Ethiglo
    // Ethnic Andaz
    // ETUDE HOUSE
    // Eucerin
    // Eufy
    // EUME
    // Eurumme
    // Eva
    // Evaflor
    // EVAM
    // EVE LOM
    // Eveline Cosmetics
    // EVERDION
    // EverEve
    // Everpure Life
    // Everteen
    // Everyuth Naturals
    // Evexpert
    // Evian
    // evolove
    // Evoluderm
    // Excel
    // ExclusiveLane
    // EXPRESSION GIFTING
    // eyda
    // Eylure
    // EZ Life
    // eze PERFUME
    // EZME STUDIO ]

    const F = ["Faaya Gifting", "FabAlley", "Fabbhue", "Fabindia", "Fabindia Fashion", "Fable & Mane", "Fablestreet", "Fabskin", "Fabula", "Face Rituals", "Faces Canada"
        , "Fade Out", "FAE Beauty", "Fair & Handsome", "FAITH & PATIENCE", "FAMMEDI", "FancyPants", "Farmacy Beauty", "Fasderma", "FASHION COLOUR"
    ]
    // Fast&Up
    // Fastrack
    // Fastrack Accessories
    // FCUK Fashion
    // Feals
    // Feather
    // Feather Your Nest Home Decor
    // Feel Good Club
    // FEIER
    // Felli
    // Fem
    // Femina Flaunt
    // FemiSafe
    // FENTY BEAUTY
    // FERNWEH
    // Fiama
    // Fida
    // FILA
    // Filone
    // Filtra
    // Final Touch
    // Find Your Happy Place
    // Fingers
    // First Aid Beauty
    // First Water
    // Fisher Space
    // Fisher-Space Pen
    // Fiskars
    // Fitbit
    // Fitflop
    // Fitkin
    // Fitspire
    // Fix My Curls
    // Fixderma
    // Fixderma Cosmetic Laboratories
    // Fixuphealth
    // Fizza
    // Fizzy Fern
    // Flawless
    // Flexnest
    // FLiCKA
    // FLM Beauty
    // FLOH
    // Floren
    // Florence by Mills
    // Floret
    // Flossy Cosmetics
    // Flower Beauty
    // Flower Organics
    // Floyd
    // FLURTH
    // FLYING BERRY
    // FNS
    // Fogg
    // foodstrong
    // Foot Fuel
    // Footlogix
    // Footprints
    // Forbis
    // FOREO
    // Forest Essentials
    // Forever 21
    // Forever New
    // FOREVER NOOR
    // ForMen
    // FORMULA 10.0.6
    // Fossil
    // Fourwalls
    // Foxtale
    // FRAGANOTE
    // Fragrance & Beyond
    // Fran Wilson Moodmatcher
    // Franck Olivier
    // Fre
    // FREECULTR
    // Freedom Tree
    // Freelance
    // French Accent
    // French Connection
    // FRENCH ESSENCE
    // French Factor
    // FUAARK
    // Fuchsia by Aashka Mehta
    // Fumato
    // FUR JADEN
    // Furla
    // FURR
    // FW Faun Walk
    // FYOLI
    const G = ["g HK glowup", "Gabit", "Gajra Gang", "Gala of London", "Galact", "GANS", "GANT", "Garden Essentials", "Garnier", "GAT", "Gathari", "Gatsby", "Gauri International"
        , "Gc", "Gem Roller", "GEMBLUE BioCare", "GEMERIA HAIR", "Genie", "GENIPS", "Gentlemen's Crew", "Getmecraft", "Ghar Soaps", "GHD", "GIAN MARCO VENTURI"
        , "Gibox", "Gillette", "Gillette Venus", "Gio Collection", "Gioia", "Giordano", "Giorgio Armani", "Giovanni", "Girlactik", "Gisada", "GIVA", "Givenchy", "GK Hair"
        , "GLAD I MET YOU", "GLAM STORY", "GLAM21", "GlamGals", "Glamina", "GLAMOUR WORLD AYURVEDIC", "GlamPalm", "Glamveda", "Glasafe", "GLASSLOCK", "Gleevers", "GLEVA"
        , "Global Beauty Secrets"]
    // "Global Desi Perfume"
    // "Globus"
    // "Globus Naturals"
    // "Globus Remedies"
    // "GLOOT"
    // "Glow & Lovely"
    // "GlowCollagen"
    // "GlowGlutathione"
    // "Glowiest"
    // "Glutafine"
    // "Glutaweis"
    // "Glutone"
    // "GM"
    // "GNC"
    // "GNIST"
    // "Go Colors"
    // "Godrej Expert"
    // "Godrej No.1"
    // "Godrej Nupur"
    // "Godrej Professional"
    // "Godrej Protekt"
    // "GODS"
    // "Goldprash"
    // "GOLI SODA"
    // "Good knight"
    // "GOODCARE"
    // "goodnessme"
    // "Gorgias London"
    // "Gorgio Professional"
    // "Gorgy"
    // "Gossip"
    // "GOUTAL PARIS"]
    // Graceful
    // GRASS
    // GREEN AND BEIGE
    // Greenbrrew
    // Greenviv
    // GRHAMOY
    // GRIIHAM
    // GRIPP
    // Gritzo
    // Groomd
    // Groomiist
    // Groversons Paris Beauty
    // GUBB
    // Gucci
    // Guerlain
    // GUESS
    // Guess Fashion
    // gullyactive
    // Gunam
    // Gush Beauty
    // Guy Laroche
    // Guy Laroche Accessories
    // Guysome
    // Gymshark
    // GynoCup
    // Gynoveda ]

    const H = ["Hackett", "Hair & Care", "Hair Drama Co.", "HAIR4REAL", "Hair4U", "Hairmac", "Haironic", "HairOriginals", "HairPro", "Hajamat", "Half N Half", "HAMELIN"
        , "Hamilton Beach", "HAMMER", "Hammonds", "Hampa", "Hamster London", "HANOWA", "Happier", "Happilo", "Happy Socks", "Happywagon", "Harissons", "Harley Davidson"
        , "Harold Meagan", "Harpic", "Haruharu Wonder", "HASK", "Haus & Kinder", "Haute Sauce", "Havells", "Hawkins & Brimble", "HAZELTHREAD", "HE", "Head & Shoulders"
        , "Heads Up For Tails", "Health Veda Organics", "HealthKart", "HealthSense", "HealthVit", "HealthViva", "Healthy Treat", "HealthyHey", "Hector Professional"
        , "Heel & Buckle London", "Heel Your Sole", "Heelium", "HEER- HOUSE OF JEWELLERY", "Heka", "Heliocare", "Helix", "Hem", "Hempnation", "Hera", "Herbal Essences"
        , "Herbal Hills", "Herbal Me", "HERMES", "Herryqeal", "HERSAY", "Heyday", "HEYS", "HF Journey", "Hi Life", "Hidesign", "HIE", "High Star", "HiLEDER", "Himaira", "Himalaya"
        , "Himalayan Organics", "Himani", "Hiphop", "Hipster", "HITKARI POTTERIES", "Hivado", "HNK", "Holika Holika", "HOLLISTER", "Hollyhock", "Home Affairs", 'Home Bloom'
        , "Homesake", "Honeybee", "HORRA", "HOSTA HOMES", "HotIce", "Houbigant", "House of Aroma", "House Of Beauty", "House of D'oro", "House Of Ekam", "House Of Kosha"
        , "House of Makeup", "House of Simitri", "House of Vian", "House This", "Huda Beauty", "Hugo", "Hugo Boss", "Hugo Boss Accessories", "Hush Puppies", "Hydes N Hues"
        , "HydraGlow", "Hygee", "Hyphen"]

    const I = ["I AM BY DOLLYJAIN", "I AM EYECONIC", "I AM LOVE", "I Jewels", "I KALL", "I'm From", "I-Feel", "IAAH", "Iba", "Ice-Watch", "ICHKAN", "ICONIC London", "Iconics"
        , "IDEE", "IDUN Minerals", "iGRiD", "Ikiriya", "Ikonic Basics", "Ikonic Luxure", "Ikonic Me", "Ikonic Professional", "Ilana", "ILEM JAPAN", "Iluvia", "IMAGE", "IMARS FASHION"
        , "Immunace", "Imperio", "ImPower", "Inaari", "Inalsa", "Inatur", "Inaya Accessories", "Inc.5", "INCHIS", "Incolor", "Indalo", "inde wild", "India Grooming Club"
        , "Indica", "Indigifts", "Indivara by Muthoot", "Indulekha", 'Indulgeo Essentials', 'Indus Valley', "Inflame", "Infuzze", "Ingersoll", "Inglot", "Inhouse by Maspar"
        , "Inja", "Inkmilan", "Inlife", "Inner Sense", "Innisfree", "Insight Cosmetics", "Insight Professional", "Instyle", "Intellilens", "INTIMATE QUEEN", "Intimo"
        , "Intimus", "Inveda", "Invicta", "INVINCIBLE", "INVU", "INYU", "IÓ", "IREKA HOMES", "Iris", "IRIS COSMETICS", "IRO", "IRUS", "IRUSSH", "Isaaka", "Isabel Marant"
        , "ISAK Fragrances", "ISDIN", "Isharya", "ISHKAARA", "Island Rangoli", "Isntree", "Isopure", "Issey Miyake", "it luggage", "It's Skin", "Ital Veloce", "Italwax", 'Itsy Bitsy'
        , "iUNIK", "IYKYK by Nykaa Fashion "]

    const J = ["J. By Janvier", "Jack & Jones", "Jacques Bogart", "Jacques Du Manoir", "Jaguar", "Jaipur Kurti", "Jaipur Watch Company", "Jalwa by Deepika"
        , "James Bond 007", "JANEKE", "Japam", "Jaquline USA", "JASMEY HOMES", "Jazz and Sizzle", "JBL", "JCPL", "Jean Paul Gaultier", "Jekyll & Hide", "Jena"
        , "Jennifer Lopez", "Jergens", "Jeva", "Jewels Galaxy", "Jewelz", "JiHa", "JILMIL", "Jimmy Choo", "Jimmy Choo Accessories", "Jiva Ayurveda", "Jo Malone London"
        , "Jockey", "John Jacobs", "John's", "Johnson's", "Johori", "Jointace C2", "Joker & Witch", "Jolen New York", "Joseph Joseph", "Joules By Radhika"
        , "Jovan", "Jove", "Jovees", "Joy", "Juice Beauty", "Juice To Cleanse", "Juicy Chemistry", "Juicy Couture", "Juicy Couture Accessories", "Juliet", "Juliette has a gun"
        , "July", "July Nightwear", "Junghans", "Just Cavalli"]

    const K = ["KADAM HAAT", "Kaefie", "KAEK BEAUTY", "Kai", " Kai India", "Kai Jewel", " Kairali", "Kaiv", "KAL HANS NATURALS", "KALKI FASHION"
        , "Kama Ayurveda", "KamaSutra", "KANELLE Fragrances", "Kaniry Artise of Novelty", "Kanpeki", "Kanvas Katha", "Kanvin", "Kapiva Ayurveda"
        , "Kapoor Lamp Shades", "Karatcart", "Karighar", "Karma Kettle", "KARMIC BEAUTY "]
    const L=["L'Ange","L'Occitane","L'Oreal Paris","L'Oreal Professionnel","L.A. Colors","L.A. Girl","La Cafetiere","La Cremerie","La Dimora Selections"
        ,"La Fiza"," La French","La Mior","La Pink","La Rochere","La Shield" ]

    return (
        <div >

            <div>
                <h1>A</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            A.map((e,index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>

            <div>
                <h1>B</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            B.map((e,index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>

            <div>
                <h1>C</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            C.map((e,index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>

            <div>
                <h1>D</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            D.map((e,index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>

            <div>
                <h1>E</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            E.map((e,index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>

            <div>
                <h1>F</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            F.map((e,index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>

            <div>
                <h1>G</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            G.map((e,index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>

            <div>
                <h1>H</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            H.map((e,index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>

            <div>
                <h1>I</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            I.map((e,index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>

            <div>
                <h1>J</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            J.map((e,index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>

            <div>
                <h1>K</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            K.map((e,index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>

            <div>
                <h1>L</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            L.map((e,index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>





        </div>
    )
}

export default Brands