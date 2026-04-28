const chairs = [
  {
    id: 'eames',
    name: 'Lounge Chair 670',
    designer: 'Charles & Ray Eames',
    year: '1956',
    manufacturer: 'Herman Miller',
    origin: 'United States',
    material: 'Molded rosewood plywood, leather, aluminum',
    description: 'Eames described it as having "the warm, receptive look of a well-used first baseman\'s mitt." Three molded plywood shells cradle the sitter in leather-padded comfort. It was a chair designed for a specific person — director Billy Wilder — and became an icon for everyone.',
    movement: 'Mid-Century Modern',
    svg: `<svg viewBox="0 0 200 210" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="100" y1="178" x2="100" y2="160"/>
      <line x1="60" y1="185" x2="140" y2="185"/>
      <line x1="55" y1="192" x2="65" y2="185"/>
      <line x1="145" y1="192" x2="135" y2="185"/>
      <line x1="78" y1="185" x2="76" y2="192"/>
      <line x1="122" y1="185" x2="124" y2="192"/>
      <path d="M 42 155 Q 42 143 55 140 Q 100 133 152 140 Q 162 143 160 155 Q 120 162 100 162 Q 72 162 42 155 Z"/>
      <path d="M 42 155 Q 34 150 35 142 Q 36 136 46 136"/>
      <path d="M 160 155 Q 168 150 167 142 Q 166 136 156 136"/>
      <path d="M 80 140 Q 72 110 65 80 Q 60 55 68 40 Q 75 28 90 32 Q 102 34 104 48 Q 108 72 105 140"/>
      <path d="M 72 120 Q 68 90 65 68" stroke-opacity="0.35"/>
    </svg>`,
  },
  {
    id: 'wassily',
    name: 'Wassily Chair',
    designer: 'Marcel Breuer',
    year: '1925',
    manufacturer: 'Knoll',
    origin: 'Germany',
    material: 'Tubular steel, canvas or leather',
    description: 'Inspired by the curved handlebars of his Adler bicycle, Breuer bent steel tubing into a chair for the first time. Originally made for his Bauhaus colleague Wassily Kandinsky, it reduced the chair to its absolute minimum — geometry, light, and industrial honesty stripped of all ornament.',
    movement: 'Bauhaus',
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="45" y1="190" x2="52" y2="65"/>
      <line x1="155" y1="190" x2="148" y2="65"/>
      <line x1="62" y1="182" x2="68" y2="25"/>
      <line x1="138" y1="182" x2="132" y2="25"/>
      <line x1="68" y1="25" x2="132" y2="25"/>
      <line x1="52" y1="65" x2="68" y2="60"/>
      <line x1="148" y1="65" x2="132" y2="60"/>
      <path d="M 45 145 Q 100 155 155 145 L 138 158 Q 100 168 62 158 Z"/>
      <path d="M 52 65 Q 100 78 148 65 L 132 60 Q 100 70 68 60 Z"/>
      <path d="M 52 65 Q 47 102 45 145 L 62 158 Q 60 112 68 60"/>
      <path d="M 148 65 Q 153 102 155 145 L 138 158 Q 140 112 132 60"/>
      <line x1="45" y1="190" x2="62" y2="182"/>
      <line x1="155" y1="190" x2="138" y2="182"/>
      <line x1="62" y1="182" x2="138" y2="182"/>
    </svg>`,
  },
  {
    id: 'barcelona',
    name: 'Barcelona Chair',
    designer: 'Mies van der Rohe',
    year: '1929',
    manufacturer: 'Knoll',
    origin: 'Germany',
    material: 'Flat steel bars, leather cushions',
    description: 'Designed for the German Pavilion at the 1929 Barcelona International Exposition, where it served as seating for King Alfonso XIII. Its X-shaped frame, drawn from Roman curule chairs and the folding stools of pharaohs, achieves the paradox Mies always sought: maximum grandeur through absolute simplicity.',
    movement: 'International Style',
    svg: `<svg viewBox="0 0 200 210" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="38" y1="192" x2="128" y2="48"/>
      <line x1="90" y1="192" x2="38" y2="128"/>
      <line x1="30" y1="192" x2="46" y2="192"/>
      <line x1="82" y1="192" x2="98" y2="192"/>
      <rect x="22" y="120" width="112" height="26" rx="4"/>
      <line x1="78" y1="120" x2="78" y2="146" stroke-opacity="0.3"/>
      <rect x="104" y="38" width="52" height="84" rx="4"/>
      <line x1="130" y1="38" x2="130" y2="122" stroke-opacity="0.3"/>
      <line x1="134" y1="120" x2="134" y2="122"/>
    </svg>`,
  },
  {
    id: 'tulip',
    name: 'Tulip Chair',
    designer: 'Eero Saarinen',
    year: '1956',
    manufacturer: 'Knoll',
    origin: 'United States',
    material: 'Fiberglass shell, aluminum pedestal, foam',
    description: 'Saarinen was disturbed by "the slum of legs" beneath mid-century tables and chairs. The Tulip Chair was his answer: one continuous form flowing from floor to seat. It was the first chair to be made of plastic on a single pedestal, eliminating the visual clutter Saarinen found so troubling.',
    movement: 'Organic Design',
    svg: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 56 200 Q 100 208 144 200 Q 140 192 100 190 Q 60 192 56 200 Z"/>
      <path d="M 88 190 Q 86 170 90 162 M 112 190 Q 114 170 110 162"/>
      <path d="M 90 162 Q 55 158 42 140 Q 34 124 42 110 Q 52 94 72 86 Q 88 80 100 80 Q 112 80 128 86 Q 148 94 158 110 Q 166 124 158 140 Q 146 158 110 162"/>
      <path d="M 95 162 Q 64 158 56 140 Q 50 126 58 114 Q 68 100 86 94 Q 100 90 114 94 Q 132 100 142 114 Q 150 126 144 140 Q 136 158 105 162" stroke-opacity="0.28"/>
      <path d="M 72 86 Q 68 68 76 52 Q 84 36 100 32 Q 116 36 124 52 Q 132 68 128 86"/>
    </svg>`,
  },
  {
    id: 'egg',
    name: 'Egg Chair',
    designer: 'Arne Jacobsen',
    year: '1958',
    manufacturer: 'Fritz Hansen',
    origin: 'Denmark',
    material: 'Fiberglass shell, foam, fabric or leather, aluminum swivel base',
    description: 'Designed for the lobby and reception areas of the Royal Hotel in Copenhagen, the Egg Chair gave its occupant something previously rare in public space: enclosure, privacy, a room within a room. Jacobsen sculpted the prototype from plaster of paris in his own garage, working after midnight, in secret.',
    movement: 'Scandinavian Modern',
    svg: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 62 202 Q 100 210 138 202 Q 134 195 100 193 Q 66 195 62 202 Z"/>
      <path d="M 90 193 L 88 172 M 110 193 L 112 172"/>
      <path d="M 52 172 Q 30 148 32 105 Q 34 58 100 35 Q 166 58 168 105 Q 170 148 148 172 Z"/>
      <path d="M 68 172 Q 50 148 54 105 Q 58 64 100 48 Q 142 64 146 105 Q 150 148 132 172"/>
      <path d="M 52 172 Q 44 162 46 148" stroke-opacity="0.4"/>
      <path d="M 148 172 Q 156 162 154 148" stroke-opacity="0.4"/>
    </svg>`,
  },
  {
    id: 'wishbone',
    name: 'Wishbone Chair',
    designer: 'Hans Wegner',
    year: '1949',
    manufacturer: 'Carl Hansen & Søn',
    origin: 'Denmark',
    material: 'Solid wood, paper cord seat',
    description: 'Also called the Y Chair, after the wishbone-shaped back rail that is its defining gesture. Wegner drew inspiration from portraits of Danish merchants seated in Ming Dynasty chairs — he was struck by the back construction and spent years refining it. The cord seat, hand-woven, requires about 120 metres of paper cord per chair.',
    movement: 'Scandinavian Modern',
    svg: `<svg viewBox="0 0 200 210" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="58" y1="192" x2="68" y2="118"/>
      <line x1="142" y1="192" x2="132" y2="118"/>
      <line x1="72" y1="185" x2="78" y2="118"/>
      <line x1="128" y1="185" x2="122" y2="118"/>
      <line x1="58" y1="155" x2="72" y2="152"/>
      <line x1="142" y1="155" x2="128" y2="152"/>
      <line x1="72" y1="152" x2="128" y2="152"/>
      <path d="M 68 118 Q 100 112 132 118 L 122 128 Q 100 134 78 128 Z"/>
      <line x1="80" y1="115" x2="78" y2="128" stroke-opacity="0.25"/>
      <line x1="92" y1="113" x2="90" y2="130" stroke-opacity="0.25"/>
      <line x1="104" y1="113" x2="102" y2="130" stroke-opacity="0.25"/>
      <line x1="116" y1="115" x2="114" y2="128" stroke-opacity="0.25"/>
      <line x1="68" y1="118" x2="70" y2="45"/>
      <line x1="132" y1="118" x2="130" y2="45"/>
      <path d="M 70 45 Q 100 38 130 45"/>
      <path d="M 70 45 Q 85 70 100 90"/>
      <path d="M 130 45 Q 115 70 100 90"/>
      <line x1="100" y1="90" x2="100" y2="118"/>
    </svg>`,
  },
  {
    id: 'diamond',
    name: 'Diamond Chair',
    designer: 'Harry Bertoia',
    year: '1952',
    manufacturer: 'Knoll',
    origin: 'United States',
    material: 'Welded steel wire, foam pad',
    description: 'Bertoia was a sculptor first, and the Diamond Chair looks like it. He described his wire chairs as "made of air — air you can see through." The shell is a single piece of welded steel wire bent and shaped into a bucket form, balanced on four hairpin legs. Knoll paid him a royalty; the chairs made both of them wealthy.',
    movement: 'Mid-Century Modern',
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 58 188 Q 70 168 74 148"/>
      <path d="M 82 188 Q 76 168 74 148"/>
      <path d="M 118 188 Q 124 168 126 148"/>
      <path d="M 142 188 Q 130 168 126 148"/>
      <path d="M 74 148 Q 52 132 48 105 Q 44 72 70 52 Q 86 40 100 38 Q 114 40 130 52 Q 156 72 152 105 Q 148 132 126 148 Z"/>
      <path d="M 74 148 Q 72 120 80 95 Q 88 68 100 58 Q 112 68 120 95 Q 128 120 126 148" stroke-opacity="0.35"/>
      <path d="M 52 108 Q 100 116 148 108" stroke-opacity="0.3"/>
      <path d="M 54 88 Q 100 96 146 88" stroke-opacity="0.3"/>
      <path d="M 62 70 Q 100 78 138 70" stroke-opacity="0.3"/>
      <path d="M 70 52 Q 100 44 130 52"/>
      <path d="M 48 105 Q 36 105 34 115 Q 34 128 52 132 Q 60 134 74 130" stroke-opacity="0.6"/>
      <path d="M 152 105 Q 164 105 166 115 Q 166 128 148 132 Q 140 134 126 130" stroke-opacity="0.6"/>
    </svg>`,
  },
  {
    id: 'thonet',
    name: 'No. 14 Chair',
    designer: 'Michael Thonet',
    year: '1859',
    manufacturer: 'Gebrüder Thonet',
    origin: 'Austria',
    material: 'Steam-bent beechwood, caned seat',
    description: 'The most successful chair ever produced — more than 50 million were made before 1930. Le Corbusier called it "a noble chair, the most distinguished, the best proportioned, and the finest in construction." Thonet\'s genius was industrial: the chair disassembled into six parts, and 36 of them could be packed into a single cubic metre for shipping.',
    movement: 'Industrial Age',
    svg: `<svg viewBox="0 0 200 215" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 62 195 Q 66 165 68 120"/>
      <path d="M 138 195 Q 134 165 132 120"/>
      <path d="M 76 188 Q 78 158 80 120"/>
      <path d="M 124 188 Q 122 158 120 120"/>
      <path d="M 64 162 Q 100 168 136 162"/>
      <path d="M 77 158 Q 100 163 123 158"/>
      <ellipse cx="100" cy="116" rx="40" ry="14"/>
      <line x1="68" y1="112" x2="132" y2="120" stroke-opacity="0.22"/>
      <line x1="68" y1="120" x2="132" y2="112" stroke-opacity="0.22"/>
      <line x1="100" y1="102" x2="100" y2="130" stroke-opacity="0.22"/>
      <line x1="72" y1="107" x2="72" y2="125" stroke-opacity="0.22"/>
      <line x1="128" y1="107" x2="128" y2="125" stroke-opacity="0.22"/>
      <path d="M 80 116 Q 78 85 82 48 Q 86 28 100 22 Q 114 28 118 48 Q 122 85 120 116"/>
      <path d="M 82 48 Q 100 36 118 48 Q 130 60 128 75 Q 126 90 118 98 Q 110 106 100 108 Q 90 106 82 98 Q 74 90 72 75 Q 70 60 82 48 Z"/>
    </svg>`,
  },
  {
    id: 'panton',
    name: 'Panton Chair',
    designer: 'Verner Panton',
    year: '1967',
    manufacturer: 'Vitra',
    origin: 'Denmark',
    material: 'Injection-moulded plastic',
    description: 'The first chair to be made from a single piece of injection-moulded plastic. Panton spent more than a decade fighting manufacturers who said it could not be done. When it finally appeared, its continuous S-curve — no legs, no joints, no assembly — made every chair that preceded it look over-engineered. It became the defining object of the psychedelic sixties.',
    movement: 'Space Age',
    svg: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 80 28 Q 52 38 48 68 Q 44 96 66 116 Q 80 130 74 152 Q 68 174 84 192 Q 92 202 100 204"/>
      <path d="M 120 28 Q 148 38 152 68 Q 156 94 134 112 Q 120 126 126 150 Q 132 174 116 192 Q 108 202 100 204"/>
      <path d="M 80 28 Q 100 20 120 28"/>
    </svg>`,
  },
  {
    id: 'womb',
    name: 'Womb Chair',
    designer: 'Eero Saarinen',
    year: '1948',
    manufacturer: 'Knoll',
    origin: 'United States',
    material: 'Fibreglass shell, foam, fabric, steel legs',
    description: 'Florence Knoll asked Saarinen to design "a chair that was like a basket full of pillows — something she could curl up in." The result was the Womb Chair, whose deep, enveloping shell lets the body settle into any number of positions. It was the first chair designed around the idea that people rarely sit up straight.',
    movement: 'Organic Design',
    svg: `<svg viewBox="0 0 200 210" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="70" y1="195" x2="82" y2="155"/>
      <line x1="85" y1="195" x2="88" y2="155"/>
      <line x1="115" y1="195" x2="112" y2="155"/>
      <line x1="130" y1="195" x2="118" y2="155"/>
      <path d="M 38 145 Q 32 105 45 72 Q 58 42 100 35 Q 142 42 155 72 Q 168 105 162 145 Q 140 158 100 160 Q 60 158 38 145 Z"/>
      <path d="M 55 145 Q 48 110 60 82 Q 72 56 100 50 Q 128 56 140 82 Q 152 110 145 145"/>
      <path d="M 38 145 Q 30 138 32 122"/>
      <path d="M 162 145 Q 170 138 168 122"/>
    </svg>`,
  },
  {
    id: 'ant',
    name: 'Ant Chair',
    designer: 'Arne Jacobsen',
    year: '1952',
    manufacturer: 'Fritz Hansen',
    origin: 'Denmark',
    material: 'Moulded plywood, steel legs',
    description: 'Jacobsen designed the Ant for the canteen of the Novo pharmaceutical factory, working within severe constraints: a moulded seat in one piece, stackable, and cheap. The pinched waist — which gives the chair its name — was a structural accident that became its defining feature. It was the first mass-produced chair made from a single piece of moulded plywood.',
    movement: 'Scandinavian Modern',
    svg: `<svg viewBox="0 0 200 210" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="72" y1="198" x2="84" y2="135"/>
      <line x1="128" y1="198" x2="116" y2="135"/>
      <line x1="100" y1="200" x2="100" y2="135"/>
      <path d="M 65 135 Q 100 128 135 135 Q 132 148 100 152 Q 68 148 65 135 Z"/>
      <path d="M 82 128 Q 100 120 118 128"/>
      <path d="M 86 108 Q 100 102 114 108"/>
      <path d="M 60 108 Q 55 80 65 55 Q 75 32 100 26 Q 125 32 135 55 Q 145 80 140 108 Q 125 115 100 118 Q 75 115 60 108 Z"/>
      <path d="M 68 95 Q 65 72 74 52 Q 84 36 100 32 Q 116 36 126 52 Q 135 72 132 95" stroke-opacity="0.3"/>
    </svg>`,
  },
  {
    id: 'zigzag',
    name: 'Zig-Zag Chair',
    designer: 'Gerrit Rietveld',
    year: '1934',
    manufacturer: 'Cassina',
    origin: 'Netherlands',
    material: 'Solid elmwood, brass fittings',
    description: 'A chair made from four flat planes of wood joined at three angles — nothing more. Rietveld was obsessed with the structural problem of a cantilevered seat with no back legs, and the Zig-Zag was his solution. Engineers said the joints would fail. He used brass bolts countersunk into the wood, and they did not. It remains one of the most structurally audacious chairs ever built.',
    movement: 'De Stijl',
    svg: `<svg viewBox="0 0 200 215" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="82" y1="28" x2="76" y2="118"/>
      <line x1="96" y1="28" x2="90" y2="118"/>
      <line x1="82" y1="28" x2="96" y2="28"/>
      <line x1="76" y1="118" x2="126" y2="148"/>
      <line x1="90" y1="118" x2="140" y2="148"/>
      <line x1="126" y1="148" x2="118" y2="172"/>
      <line x1="140" y1="148" x2="132" y2="172"/>
      <line x1="126" y1="148" x2="140" y2="148"/>
      <line x1="118" y1="172" x2="60" y2="185"/>
      <line x1="132" y1="172" x2="72" y2="190"/>
      <line x1="118" y1="172" x2="132" y2="172"/>
      <line x1="60" y1="185" x2="72" y2="190"/>
    </svg>`,
  },
  {
    id: 'superleggera',
    name: 'Superleggera',
    designer: 'Gio Ponti',
    year: '1957',
    manufacturer: 'Cassina',
    origin: 'Italy',
    material: 'Ash wood, woven cane seat',
    description: 'Ponti spent ten years refining the traditional Chiavari chair into something he called the ideal chair. The result weighs 1.7 kilograms. He reportedly threw a prototype from a fourth-floor window; it survived intact. The name means "superlight" in Italian, and the chair is so slender it appears to be drawn rather than built.',
    movement: 'Italian Modernism',
    svg: `<svg viewBox="0 0 200 215" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="68" y1="198" x2="72" y2="130"/>
      <line x1="132" y1="198" x2="128" y2="130"/>
      <line x1="76" y1="192" x2="80" y2="130"/>
      <line x1="124" y1="192" x2="120" y2="130"/>
      <line x1="68" y1="165" x2="76" y2="163"/>
      <line x1="132" y1="165" x2="124" y2="163"/>
      <line x1="76" y1="163" x2="124" y2="163"/>
      <path d="M 72 130 Q 100 124 128 130 L 120 138 Q 100 144 80 138 Z"/>
      <line x1="84" y1="127" x2="82" y2="138" stroke-opacity="0.22"/>
      <line x1="94" y1="125" x2="92" y2="140" stroke-opacity="0.22"/>
      <line x1="104" y1="125" x2="102" y2="140" stroke-opacity="0.22"/>
      <line x1="114" y1="127" x2="112" y2="138" stroke-opacity="0.22"/>
      <line x1="72" y1="130" x2="74" y2="42"/>
      <line x1="128" y1="130" x2="126" y2="42"/>
      <path d="M 74 42 Q 100 36 126 42"/>
      <line x1="73" y1="85" x2="127" y2="85"/>
    </svg>`,
  },
  {
    id: 'lc2',
    name: 'LC2 Grand Comfort',
    designer: 'Le Corbusier',
    year: '1928',
    manufacturer: 'Cassina',
    origin: 'France',
    material: 'Chrome-plated tubular steel, leather cushions',
    description: 'Le Corbusier called it "a basket in which cushions are placed." The tubular steel frame is left entirely exposed on the outside — the machine holding the comfort, not hiding it. Designed with Charlotte Perriand and Pierre Jeanneret for the Villa La Roche, the LC2 turned the conventional relationship between structure and upholstery inside out.',
    movement: 'International Style',
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="38" y="88" width="124" height="100" rx="6"/>
      <line x1="38" y1="148" x2="162" y2="148"/>
      <line x1="38" y1="88" x2="52" y2="75"/>
      <line x1="162" y1="88" x2="176" y2="75"/>
      <line x1="38" y1="148" x2="52" y2="135"/>
      <line x1="162" y1="148" x2="176" y2="135"/>
      <line x1="38" y1="188" x2="52" y2="178"/>
      <line x1="162" y1="188" x2="176" y2="178"/>
      <line x1="52" y1="75" x2="176" y2="75"/>
      <line x1="52" y1="75" x2="52" y2="178"/>
      <line x1="176" y1="75" x2="176" y2="178"/>
      <line x1="52" y1="178" x2="176" y2="178"/>
      <rect x="46" y="150" width="108" height="32" rx="3"/>
      <rect x="46" y="92" width="108" height="52" rx="3"/>
      <rect x="34" y="92" width="18" height="56" rx="3"/>
      <rect x="148" y="92" width="18" height="56" rx="3"/>
    </svg>`,
  },
  {
    id: 'paimio',
    name: 'Paimio Armchair',
    designer: 'Alvar Aalto',
    year: '1932',
    manufacturer: 'Artek',
    origin: 'Finland',
    material: 'Bent birch plywood, laminated birch',
    description: 'Designed for the tuberculosis sanatorium in Paimio, Finland, the chair was conceived as medical equipment. The backrest angle was calculated to ease breathing in patients with lung disease. The smooth, unjointed surface could be easily cleaned. Aalto\'s genius was in making something technically purposeful feel warm, natural, and deeply humane.',
    movement: 'Scandinavian Modern',
    svg: `<svg viewBox="0 0 200 210" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 45 188 Q 42 160 48 130 Q 54 98 62 72 Q 70 48 72 30 Q 78 18 88 22 Q 96 26 92 42 Q 88 60 82 90"/>
      <path d="M 72 188 Q 70 162 76 130 Q 82 98 90 72 Q 98 48 100 30 Q 106 18 116 22 Q 124 26 120 42 Q 116 60 110 90"/>
      <line x1="48" y1="158" x2="76" y2="155"/>
      <line x1="55" y1="120" x2="83" y2="118"/>
      <path d="M 82 90 Q 105 84 110 90 Q 116 102 105 118 Q 95 132 88 145 Q 82 158 85 170 Q 88 182 100 185 Q 115 188 130 182 Q 148 174 155 158 Q 162 140 158 120 Q 154 100 148 85 Q 144 72 148 60 Q 152 48 148 38 Q 144 26 136 22"/>
    </svg>`,
  },
  {
    id: 'ghost',
    name: 'Louis Ghost Chair',
    designer: 'Philippe Starck',
    year: '2002',
    manufacturer: 'Kartell',
    origin: 'France / Italy',
    material: 'Injection-moulded polycarbonate',
    description: 'Starck took the Louis XVI armchair — the most bourgeois object in French decorative history — and made it invisible. Cast in a single piece of transparent polycarbonate, the Ghost Chair is simultaneously a historical quote and its own erasure. It became the best-selling designer chair in history, proof that irony, when done with complete conviction, can please everyone.',
    movement: 'Postmodernism',
    svg: `<svg viewBox="0 0 200 215" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 68 195 Q 70 170 75 148"/>
      <path d="M 132 195 Q 130 170 125 148"/>
      <path d="M 78 192 Q 80 168 83 148"/>
      <path d="M 122 192 Q 120 168 117 148"/>
      <path d="M 75 148 Q 100 140 125 148 L 117 158 Q 100 166 83 158 Z"/>
      <path d="M 75 148 Q 55 145 48 132 Q 44 120 52 112 Q 60 104 72 108"/>
      <path d="M 125 148 Q 145 145 152 132 Q 156 120 148 112 Q 140 104 128 108"/>
      <line x1="72" y1="108" x2="76" y2="42"/>
      <line x1="128" y1="108" x2="124" y2="42"/>
      <path d="M 76 42 Q 82 28 100 24 Q 118 28 124 42"/>
      <path d="M 82 108 Q 80 85 88 65 Q 94 50 100 46 Q 106 50 112 65 Q 120 85 118 108"/>
      <path d="M 90 108 Q 90 88 96 72 Q 100 62 104 72 Q 110 88 110 108" stroke-opacity="0.35"/>
    </svg>`,
  },
  {
    id: 'swan',
    name: 'Swan Chair',
    designer: 'Arne Jacobsen',
    year: '1958',
    manufacturer: 'Fritz Hansen',
    origin: 'Denmark',
    material: 'Fibreglass shell, foam, fabric or leather, aluminium swivel base',
    description: 'Designed alongside the Egg Chair for the Royal Hotel in Copenhagen, the Swan is its more extroverted sibling. The shell has no straight lines — every surface curves into the next. Jacobsen banned right angles from the entire hotel interior, and the Swan is perhaps the purest expression of that commitment to continuous, organic form.',
    movement: 'Scandinavian Modern',
    svg: `<svg viewBox="0 0 200 215" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 65 202 Q 100 210 135 202 Q 131 195 100 193 Q 69 195 65 202 Z"/>
      <path d="M 91 193 L 90 175 M 109 193 L 110 175"/>
      <path d="M 90 175 Q 48 168 36 138 Q 26 108 44 80 Q 56 60 78 55 Q 92 52 98 68"/>
      <path d="M 110 175 Q 152 168 164 138 Q 174 108 156 80 Q 144 60 122 55 Q 108 52 102 68"/>
      <path d="M 98 68 Q 100 58 102 68"/>
      <path d="M 90 175 Q 72 168 66 148 Q 60 128 70 108 Q 80 90 98 85"/>
      <path d="M 110 175 Q 128 168 134 148 Q 140 128 130 108 Q 120 90 102 85"/>
      <path d="M 44 80 Q 30 65 28 48 Q 28 34 40 28"/>
      <path d="M 156 80 Q 170 65 172 48 Q 172 34 160 28"/>
    </svg>`,
  },
  {
    id: 'ball',
    name: 'Ball Chair',
    designer: 'Eero Aarnio',
    year: '1966',
    manufacturer: 'Aarnio Originals',
    origin: 'Finland',
    material: 'Fibreglass shell, foam cushion, aluminium swivel base',
    description: 'Aarnio designed the Ball Chair in his own home, starting from a fibreglass sphere and cutting away the front to make a room within a room. He described it as "a room inside a room — you can close yourself off from the outside world." It became the defining object of the Space Age aesthetic, appearing in films and television as shorthand for the future.',
    movement: 'Space Age',
    svg: `<svg viewBox="0 0 200 215" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 66 204 Q 100 212 134 204 Q 130 197 100 195 Q 70 197 66 204 Z"/>
      <path d="M 90 195 L 88 178 M 110 195 L 112 178"/>
      <path d="M 52 178 Q 30 152 32 112 Q 34 68 68 46 Q 82 38 100 36 Q 118 38 132 46 Q 166 68 168 112 Q 170 152 148 178 Z"/>
      <path d="M 52 178 Q 58 148 66 122 Q 76 92 100 80 Q 124 92 134 122 Q 142 148 148 178"/>
      <path d="M 72 170 Q 78 148 84 132 Q 92 112 100 106 Q 108 112 116 132 Q 122 148 128 170" stroke-opacity="0.28"/>
    </svg>`,
  },
  {
    id: 'butterfly',
    name: 'Butterfly Chair',
    designer: 'Jorge Ferrari-Hardoy',
    year: '1938',
    manufacturer: 'Knoll',
    origin: 'Argentina',
    material: 'Powder-coated steel frame, leather or canvas sling',
    description: 'Also called the BKF Chair, after its three Argentine designers — Bonet, Kurchan, and Ferrari-Hardoy. A leather or canvas sling drops into an X-shaped steel rod frame, held in place by gravity alone. It was the most pirated design of the twentieth century: by 1951, over five million unauthorised copies had been sold, mostly in the United States.',
    movement: 'Modernism',
    svg: `<svg viewBox="0 0 200 210" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="42" y1="198" x2="158" y2="162"/>
      <line x1="158" y1="198" x2="42" y2="162"/>
      <path d="M 42 162 Q 34 128 40 88 Q 46 56 62 34"/>
      <path d="M 158 162 Q 166 128 160 88 Q 154 56 138 34"/>
      <path d="M 62 34 Q 100 26 138 34 Q 128 105 100 132 Q 72 105 62 34 Z"/>
      <path d="M 68 36 Q 100 56 132 36" stroke-opacity="0.28"/>
      <path d="M 74 46 Q 100 78 126 46" stroke-opacity="0.18"/>
    </svg>`,
  },
  {
    id: 'red-blue',
    name: 'Red Blue Chair',
    designer: 'Gerrit Rietveld',
    year: '1917',
    manufacturer: 'Cassina',
    origin: 'Netherlands',
    material: 'Painted beechwood',
    description: 'Rietveld made the first version in plain wood before painting it in De Stijl primary colours in 1923. The chair is a manifesto: every element is separate, every joint visible, every colour distinct. Rietveld wanted to prove that space could be defined without enclosing it — that a chair could be a drawing in three dimensions. It remains one of the most influential objects in the history of design.',
    movement: 'De Stijl',
    svg: `<svg viewBox="0 0 200 215" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="38" y1="20" x2="38" y2="195"/>
      <line x1="58" y1="20" x2="58" y2="195"/>
      <rect x="38" y="22" width="108" height="18" rx="1"/>
      <rect x="38" y="118" width="108" height="16" rx="1"/>
      <line x1="58" y1="134" x2="58" y2="198"/>
      <line x1="146" y1="134" x2="146" y2="198"/>
      <line x1="38" y1="134" x2="38" y2="195"/>
      <line x1="128" y1="134" x2="128" y2="198"/>
      <line x1="128" y1="22" x2="128" y2="135"/>
      <line x1="146" y1="22" x2="146" y2="135"/>
      <line x1="38" y1="80" x2="146" y2="80"/>
      <line x1="38" y1="95" x2="146" y2="95"/>
      <line x1="38" y1="20" x2="165" y2="20"/>
      <line x1="58" y1="38" x2="58" y2="18"/>
    </svg>`,
  },
  {
    id: 'lc4',
    name: 'LC4 Chaise Longue',
    designer: 'Le Corbusier',
    year: '1928',
    manufacturer: 'Cassina',
    origin: 'France',
    material: 'Chrome-plated tubular steel, leather or pony skin',
    description: 'Le Corbusier called it "a machine for resting." The reclining shell floats freely on the H-shaped base, adjustable to any angle by shifting its centre of gravity — no mechanism, no levers. Designed with Charlotte Perriand and Pierre Jeanneret, it takes the logic of ergonomic recline to an absolute conclusion. The headrest is a separately placed cushion, a decision of almost absurd refinement.',
    movement: 'International Style',
    svg: `<svg viewBox="0 0 240 160" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="138" x2="210" y2="138"/>
      <line x1="30" y1="148" x2="210" y2="148"/>
      <line x1="55" y1="138" x2="55" y2="155"/>
      <line x1="185" y1="138" x2="185" y2="155"/>
      <path d="M 22 130 Q 20 110 28 90 Q 36 68 55 55 Q 75 42 105 38 Q 148 34 185 45 Q 210 54 218 72 Q 222 88 215 105 Q 208 120 195 128 Q 160 138 100 138 Q 55 138 22 130 Z"/>
      <path d="M 30 128 Q 30 110 38 92 Q 48 72 70 60 Q 92 50 120 47 Q 155 44 180 56 Q 200 66 205 84 Q 208 100 200 116 Q 190 128 170 132" stroke-opacity="0.3"/>
      <path d="M 22 130 Q 16 118 18 102 Q 20 90 30 85 Q 38 82 45 88 Q 50 95 48 108"/>
    </svg>`,
  },
  {
    id: 'standard',
    name: 'Standard Chair',
    designer: 'Jean Prouvé',
    year: '1934',
    manufacturer: 'Vitra',
    origin: 'France',
    material: 'Bent sheet steel (rear legs), solid oak (front legs), plywood seat',
    description: 'Prouvé was trained as a metalworker, not a designer, and it shows. The Standard Chair\'s rear legs are bent sheet metal — strong where the load is greatest — while the front legs are solid wood. This structural logic, giving each element only what it needs, makes the chair look as if it arrived fully formed from some engineering truth. No chair before it had such explicit honesty about how forces travel through a frame.',
    movement: 'Modernism',
    svg: `<svg viewBox="0 0 200 210" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="72" y1="198" x2="76" y2="118"/>
      <line x1="88" y1="198" x2="90" y2="118"/>
      <path d="M 118 198 Q 130 160 138 128 Q 144 108 138 90 Q 132 72 122 62"/>
      <path d="M 132 198 Q 146 162 154 130 Q 160 108 152 90 Q 146 72 136 62"/>
      <path d="M 76 118 Q 108 112 138 118 L 130 130 Q 108 136 84 130 Z"/>
      <line x1="76" y1="118" x2="80" y2="40"/>
      <line x1="90" y1="118" x2="94" y2="40"/>
      <path d="M 80 40 Q 108 32 122 62"/>
      <path d="M 94 40 Q 118 34 136 62"/>
      <line x1="81" y1="78" x2="128" y2="78"/>
    </svg>`,
  },
  {
    id: 'coconut',
    name: 'Coconut Chair',
    designer: 'George Nelson',
    year: '1955',
    manufacturer: 'Herman Miller',
    origin: 'United States',
    material: 'Steel shell, foam, upholstery, chrome wire legs',
    description: 'Nelson said it was inspired by a fragment of coconut shell — a curved triangle with the structural stiffness of a dome. The shell is a one-eighth segment of a sphere, hovering on three chrome wire legs. It offers neither a back nor arms in the conventional sense; instead the sitter is cradled in a continuous curve that provides support in every direction simultaneously.',
    movement: 'Mid-Century Modern',
    svg: `<svg viewBox="0 0 200 210" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 72 198 Q 80 170 86 148"/>
      <path d="M 88 198 Q 88 170 88 148"/>
      <path d="M 128 198 Q 120 170 114 148"/>
      <path d="M 86 148 Q 52 138 38 105 Q 28 75 48 52 Q 62 35 88 32 Q 118 30 148 50 Q 168 68 162 100 Q 156 132 132 148 Z"/>
      <path d="M 86 148 Q 60 136 52 108 Q 44 80 62 60 Q 76 46 100 44 Q 126 44 142 60 Q 156 78 148 106 Q 140 132 114 148" stroke-opacity="0.3"/>
    </svg>`,
  },
  {
    id: 'peacock',
    name: 'Peacock Chair',
    designer: 'Hans Wegner',
    year: '1947',
    manufacturer: 'PP Møbler',
    origin: 'Denmark',
    material: 'Ash wood, paper cord seat',
    description: 'Wegner reinterpreted the English Windsor chair through the lens of Danish craft, replacing the traditional back with a fan of spindles that spread outward like a peacock\'s tail. The curved top rail, steam-bent from a single piece of wood, sweeps up and out to wide flat armrests. Wegner considered it among his own favourites. John F. Kennedy sat in one during his first presidential debate against Nixon in 1960.',
    movement: 'Scandinavian Modern',
    svg: `<svg viewBox="0 0 200 215" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="62" y1="200" x2="72" y2="128"/>
      <line x1="138" y1="200" x2="128" y2="128"/>
      <line x1="76" y1="196" x2="80" y2="128"/>
      <line x1="124" y1="196" x2="120" y2="128"/>
      <line x1="64" y1="164" x2="136" y2="164"/>
      <path d="M 72 128 Q 100 120 128 128 L 120 140 Q 100 146 80 140 Z"/>
      <line x1="80" y1="128" x2="84" y2="52"/>
      <line x1="120" y1="128" x2="116" y2="52"/>
      <line x1="84" y1="128" x2="72" y2="52"/>
      <line x1="86" y1="128" x2="80" y2="48"/>
      <line x1="90" y1="125" x2="88" y2="44"/>
      <line x1="100" y1="124" x2="100" y2="42"/>
      <line x1="110" y1="125" x2="112" y2="44"/>
      <line x1="114" y1="128" x2="120" y2="48"/>
      <line x1="116" y1="128" x2="128" y2="52"/>
      <path d="M 72 52 Q 100 30 128 52"/>
      <path d="M 72 52 Q 52 55 44 68 Q 40 78 46 86"/>
      <path d="M 128 52 Q 148 55 156 68 Q 160 78 154 86"/>
    </svg>`,
  },
  {
    id: 'hill-house',
    name: 'Hill House Chair',
    designer: 'Charles Rennie Mackintosh',
    year: '1902',
    manufacturer: 'Cassina',
    origin: 'Scotland',
    material: 'Ebonized ash, rush seat',
    description: 'Designed for the bedroom of Hill House near Glasgow, this chair is less a place to sit than a vertical sculpture. Its back rises nearly five feet — a ladder of elongated rectangles turning a functional object into a declaration of intent. It could not have been made by anyone else, in any other time.',
    movement: 'Arts & Crafts',
    svg: `<svg viewBox="0 0 200 240" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="74" y1="232" x2="76" y2="176"/>
      <line x1="126" y1="232" x2="124" y2="176"/>
      <line x1="82" y1="228" x2="83" y2="176"/>
      <line x1="118" y1="228" x2="117" y2="176"/>
      <rect x="65" y="164" width="70" height="14" rx="1"/>
      <line x1="80" y1="164" x2="80" y2="10"/>
      <line x1="120" y1="164" x2="120" y2="10"/>
      <line x1="80" y1="10" x2="120" y2="10"/>
      <line x1="80" y1="30" x2="120" y2="30"/>
      <line x1="80" y1="56" x2="120" y2="56"/>
      <line x1="80" y1="82" x2="120" y2="82"/>
      <line x1="80" y1="108" x2="120" y2="108"/>
      <line x1="80" y1="134" x2="120" y2="134"/>
      <line x1="80" y1="152" x2="120" y2="152"/>
    </svg>`,
  },
  {
    id: 'brno',
    name: 'Brno Chair',
    designer: 'Mies van der Rohe',
    year: '1930',
    manufacturer: 'Knoll',
    origin: 'Germany',
    material: 'Chrome-plated steel, leather',
    description: 'Created for the Villa Tugendhat in Brno, the chair uses a cantilevered flat-bar steel frame — lighter and more refined than the Barcelona\'s thick tubes. Mies believed that structure and architecture were the same discipline. This chair is proof. It has an effortless poise, as if gravity applies to it differently.',
    movement: 'International Style',
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 62 188 C 58 158 62 128 74 108 L 74 28"/>
      <path d="M 138 188 C 142 158 138 128 126 108 L 126 28"/>
      <line x1="62" y1="188" x2="138" y2="188"/>
      <line x1="74" y1="28" x2="126" y2="28"/>
      <rect x="74" y="36" width="52" height="66" rx="2"/>
      <rect x="74" y="108" width="52" height="16" rx="2"/>
    </svg>`,
  },
  {
    id: 'platner',
    name: 'Platner Arm Chair',
    designer: 'Warren Platner',
    year: '1966',
    manufacturer: 'Knoll',
    origin: 'United States',
    material: 'Nickel-plated steel wire, upholstery',
    description: 'Platner bent hundreds of steel rods into a sculptural base that catches light from every angle. He described the look as "decorative, gentle, and receptive" — a deliberate pushback against the hard minimalism surrounding him. The result is a chair that seems to shimmer as you move around it.',
    movement: 'Mid-Century Modern',
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 100 190 C 55 188 30 168 30 140 C 30 116 46 106 66 105"/>
      <path d="M 100 190 C 74 184 52 166 52 142 C 52 120 64 108 78 106"/>
      <path d="M 100 190 C 88 183 76 168 76 144 C 76 124 86 110 94 106"/>
      <path d="M 100 190 C 112 183 124 168 124 144 C 124 124 114 110 106 106"/>
      <path d="M 100 190 C 126 184 148 166 148 142 C 148 120 136 108 122 106"/>
      <path d="M 100 190 C 145 188 170 168 170 140 C 170 116 154 106 134 105"/>
      <ellipse cx="100" cy="106" rx="34" ry="8"/>
      <path d="M 66 105 Q 100 96 134 105 Q 134 118 100 122 Q 66 118 66 105 Z"/>
      <path d="M 66 105 C 62 80 66 52 100 44 C 134 52 138 80 134 105"/>
    </svg>`,
  },
  {
    id: 'djinn',
    name: 'Djinn Chair',
    designer: 'Olivier Mourgue',
    year: '1965',
    manufacturer: 'Airborne International',
    origin: 'France',
    material: 'Tubular steel, foam, jersey fabric',
    description: 'Named after spirits of Arabic folklore, the Djinn made its most famous appearance in Kubrick\'s 2001: A Space Odyssey. Its continuous curved profile, covered in red stretch fabric, announced a new relationship between furniture and the body — one based on flow rather than structure.',
    movement: 'Space Age',
    svg: `<svg viewBox="0 0 200 185" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 36 175 Q 100 162 164 175 Q 158 168 100 165 Q 42 168 36 175 Z"/>
      <path d="M 75 165 L 74 148"/>
      <path d="M 125 165 L 126 148"/>
      <path d="M 74 148 Q 100 140 126 148 Q 124 158 100 160 Q 76 158 74 148 Z"/>
      <path d="M 74 148 C 48 138 32 115 34 90 C 36 65 54 48 80 44 Q 90 42 100 44"/>
      <path d="M 126 148 C 152 138 168 115 166 90 C 164 65 146 48 120 44 Q 110 42 100 44"/>
      <path d="M 80 148 C 58 138 46 116 48 92 C 50 70 66 56 88 52"/>
      <path d="M 120 148 C 142 138 154 116 152 92 C 150 70 134 56 112 52"/>
    </svg>`,
  },
  {
    id: 'ribbon',
    name: 'Ribbon Chair',
    designer: 'Pierre Paulin',
    year: '1966',
    manufacturer: 'Artifort',
    origin: 'France',
    material: 'Steel frame, foam, stretch fabric',
    description: 'Paulin stretched fabric over a bent steel frame to create a chair that moves like water. The seat, back, and armrests flow together without seam or interruption. It was a manifesto against the rigidity of postwar furniture — soft, enveloping, and quietly radical in its refusal of any straight line.',
    movement: 'Space Age',
    svg: `<svg viewBox="0 0 200 185" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="68" y1="178" x2="74" y2="152"/>
      <line x1="132" y1="178" x2="126" y2="152"/>
      <line x1="76" y1="176" x2="80" y2="152"/>
      <line x1="124" y1="176" x2="120" y2="152"/>
      <path d="M 74 152 Q 100 144 126 152 Q 124 163 100 165 Q 76 163 74 152 Z"/>
      <path d="M 74 152 C 50 142 32 120 32 96 C 32 72 48 54 74 46 Q 86 42 100 44"/>
      <path d="M 126 152 C 150 142 168 120 168 96 C 168 72 152 54 126 46 Q 114 42 100 44"/>
      <path d="M 82 152 C 62 142 50 122 52 98 C 54 76 68 62 88 56"/>
      <path d="M 118 152 C 138 142 150 122 148 98 C 146 76 132 62 112 56"/>
      <path d="M 88 56 Q 100 52 112 56"/>
    </svg>`,
  },
  {
    id: 'sacco',
    name: 'Sacco',
    designer: 'Piero Gatti, Cesare Paolini, Franco Teodoro',
    year: '1968',
    manufacturer: 'Zanotta',
    origin: 'Italy',
    material: 'PVC leather, expanded polystyrene beads',
    description: 'The Sacco abolished the frame entirely. Fill a bag with six million polystyrene beads and let it become whatever the body needs. It was the anti-chair of the anti-design movement — a critique of functionalism disguised as pure comfort. No designer had ever done less and achieved more.',
    movement: 'Anti-Design',
    svg: `<svg viewBox="0 0 200 215" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 100 25 C 128 25 152 44 162 72 C 174 104 170 142 156 166 C 142 188 122 202 100 204 C 78 202 58 188 44 166 C 30 142 26 104 38 72 C 48 44 72 25 100 25 Z"/>
      <path d="M 84 28 C 90 18 110 18 116 28"/>
      <path d="M 55 115 Q 100 100 145 115" stroke-opacity="0.35"/>
    </svg>`,
  },
  {
    id: 'up5',
    name: 'UP5 Donna',
    designer: 'Gaetano Pesce',
    year: '1969',
    manufacturer: 'B&B Italia',
    origin: 'Italy',
    material: 'Polyurethane foam, stretch fabric',
    description: 'Pesce designed this as a commentary on the female form and its social constraints — the attached ottoman represents a ball and chain. Originally sold vacuum-packed flat, it expanded dramatically upon opening. It is furniture as provocation, as metaphor, and somehow also as one of the most comfortable seats ever made.',
    movement: 'Anti-Design',
    svg: `<svg viewBox="0 0 200 225" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 100 18 C 134 18 162 42 168 74 C 174 108 162 144 146 162 C 130 178 116 186 100 188 C 84 186 70 178 54 162 C 38 144 26 108 32 74 C 38 42 66 18 100 18 Z"/>
      <path d="M 60 118 Q 100 106 140 118" stroke-opacity="0.35"/>
      <line x1="100" y1="188" x2="100" y2="203"/>
      <circle cx="100" cy="215" r="12"/>
    </svg>`,
  },
  {
    id: 'elda',
    name: 'Elda Chair',
    designer: 'Joe Colombo',
    year: '1963',
    manufacturer: 'Comfort',
    origin: 'Italy',
    material: 'Fibreglass shell, leather cushions, swivel base',
    description: 'Colombo cast a fibreglass shell in the shape of an open egg and lined it with leather cushions. The result is furniture with the ambience of a private room. Named after his wife, it was among the first large-scale uses of fibreglass in furniture design and a landmark of Italian space-age thinking.',
    movement: 'Italian Modernism',
    svg: `<svg viewBox="0 0 200 210" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 60 200 Q 100 208 140 200 Q 136 192 100 190 Q 64 192 60 200 Z"/>
      <line x1="90" y1="190" x2="88" y2="174"/>
      <line x1="110" y1="190" x2="112" y2="174"/>
      <path d="M 88 174 C 38 170 16 138 20 98 C 24 60 52 26 100 22 C 148 26 176 60 180 98 C 184 138 162 170 112 174"/>
      <path d="M 88 174 Q 100 180 112 174"/>
      <path d="M 60 170 C 40 152 36 122 42 96 C 48 72 68 50 100 46 C 132 50 152 72 158 96 C 164 122 160 152 140 170"/>
    </svg>`,
  },
  {
    id: 'ox',
    name: 'Ox Chair',
    designer: 'Hans Wegner',
    year: '1960',
    manufacturer: 'Erik Jørgensen',
    origin: 'Denmark',
    material: 'Foam, leather, steel legs',
    description: 'Wegner\'s most expressionistic design takes its name from the silhouette of an ox head seen from behind — the two horn-like headrests are unmistakable. Out of production for decades, it was relaunched in 2011, proving that the best designs wait patiently to be rediscovered.',
    movement: 'Scandinavian Modern',
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="70" y1="192" x2="76" y2="148"/>
      <line x1="130" y1="192" x2="124" y2="148"/>
      <line x1="79" y1="190" x2="83" y2="148"/>
      <line x1="121" y1="190" x2="117" y2="148"/>
      <path d="M 68 148 Q 100 140 132 148 Q 130 160 100 163 Q 70 160 68 148 Z"/>
      <path d="M 68 148 L 54 55 Q 55 46 64 44 Q 100 40 136 44 Q 145 46 146 55 L 132 148"/>
      <path d="M 54 55 C 46 46 40 30 48 20 C 54 13 66 17 68 30"/>
      <path d="M 146 55 C 154 46 160 30 152 20 C 146 13 134 17 132 30"/>
      <path d="M 72 143 L 64 68 Q 100 62 136 68 L 128 143" stroke-opacity="0.4"/>
    </svg>`,
  },
  {
    id: 'karuselli',
    name: 'Karuselli Chair',
    designer: 'Yrjö Kukkapuro',
    year: '1964',
    manufacturer: 'Haimi / Avarte',
    origin: 'Finland',
    material: 'Fibreglass shell, leather, steel swivel base',
    description: 'Kukkapuro designed the Karuselli after making a plaster cast of himself sitting comfortably in the snow. The resulting fibreglass shell fits the human body with uncanny precision. It is ergonomics achieved through intuition rather than measurement — a Finnish snow angel translated into furniture.',
    movement: 'Scandinavian Modern',
    svg: `<svg viewBox="0 0 200 210" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 55 202 Q 100 210 145 202 Q 141 194 100 192 Q 59 194 55 202 Z"/>
      <line x1="88" y1="192" x2="86" y2="176"/>
      <line x1="112" y1="192" x2="114" y2="176"/>
      <path d="M 86 176 C 40 172 16 146 18 108 C 20 72 50 38 100 34 C 150 38 180 72 182 108 C 184 146 160 172 114 176"/>
      <path d="M 86 176 Q 100 183 114 176"/>
      <path d="M 86 176 C 54 170 42 148 44 118 C 46 90 66 64 100 60 C 134 64 154 90 156 118 C 158 148 146 170 114 176"/>
    </svg>`,
  },
  {
    id: 's-chair',
    name: 'S Chair',
    designer: 'Tom Dixon',
    year: '1987',
    manufacturer: 'Cappellini',
    origin: 'United Kingdom',
    material: 'Wicker, rush, steel frame',
    description: 'Dixon taught himself to weld and bent steel into an S-curve before wrapping it in wicker and rush. Made in a London warehouse before Cappellini gave it global distribution, the S Chair is an object lesson in how constraint and ingenuity can produce something that outlasts both.',
    movement: 'Postmodernism',
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 52 188 C 52 170 62 158 78 148 C 96 137 112 128 120 112 C 128 96 122 76 110 62 C 98 48 90 36 96 22 C 100 13 112 10 122 14"/>
      <path d="M 76 188 C 76 172 84 160 98 150 C 114 140 128 130 134 116 C 140 100 135 80 124 67 C 113 54 106 44 112 32 C 116 23 126 20 134 26"/>
      <path d="M 52 188 Q 64 193 76 188"/>
      <path d="M 122 14 Q 128 14 134 26"/>
    </svg>`,
  },
  {
    id: 'aeron',
    name: 'Aeron Chair',
    designer: 'Bill Stumpf & Don Chadwick',
    year: '1994',
    manufacturer: 'Herman Miller',
    origin: 'United States',
    material: '8Z Pellicle mesh, recycled aluminium',
    description: 'Stumpf and Chadwick rejected the padded throne as a model for office seating and invented a new category. The Aeron\'s mesh Pellicle suspends the sitter in a way that promotes airflow and distributes weight precisely. It became the default chair of the dot-com era and remains the benchmark for ergonomic design.',
    movement: 'Ergonomic Design',
    svg: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="100" y1="212" x2="55" y2="218"/>
      <line x1="100" y1="212" x2="145" y2="218"/>
      <line x1="100" y1="212" x2="68" y2="208"/>
      <line x1="100" y1="212" x2="132" y2="208"/>
      <line x1="100" y1="212" x2="100" y2="220"/>
      <line x1="100" y1="212" x2="100" y2="172"/>
      <path d="M 65 172 Q 100 163 135 172 Q 132 184 100 186 Q 68 184 65 172 Z"/>
      <path d="M 65 172 L 46 166 L 44 148 L 56 147"/>
      <path d="M 135 172 L 154 166 L 156 148 L 144 147"/>
      <path d="M 56 147 C 52 120 58 90 70 65 Q 84 42 100 40 Q 116 42 130 65 C 142 90 148 120 144 147"/>
      <path d="M 62 140 Q 100 133 138 140" stroke-opacity="0.5"/>
      <line x1="64" y1="118" x2="136" y2="118" stroke-opacity="0.35"/>
      <line x1="68" y1="96" x2="132" y2="96" stroke-opacity="0.35"/>
      <line x1="74" y1="76" x2="126" y2="76" stroke-opacity="0.35"/>
    </svg>`,
  },
  {
    id: 'embryo',
    name: 'Embryo Chair',
    designer: 'Marc Newson',
    year: '1988',
    manufacturer: 'Idée / Cappellini',
    origin: 'Australia',
    material: 'Fibreglass, neoprene, aluminium legs',
    description: 'Newson designed the Embryo at 24, fresh out of design school in Sydney. Its biomorphic form — swelling and curving in every direction at once — announced a new organic language for furniture. It looks grown rather than made, and prefigured a decade of biodesign that followed.',
    movement: 'Contemporary',
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="78" y1="190" x2="86" y2="158"/>
      <line x1="122" y1="190" x2="114" y2="158"/>
      <line x1="100" y1="193" x2="100" y2="160"/>
      <path d="M 86 158 C 56 154 32 136 30 108 C 28 82 46 58 74 48 C 90 42 108 42 122 50 C 144 60 158 82 156 108 C 154 134 138 152 114 158"/>
      <path d="M 86 158 C 64 152 52 136 54 112 C 56 90 72 74 100 72 C 120 72 136 86 138 110 C 140 132 128 150 114 158"/>
    </svg>`,
  },
  {
    id: 'vegetal',
    name: 'Vegetal Chair',
    designer: 'Ronan & Erwan Bouroullec',
    year: '2008',
    manufacturer: 'Vitra',
    origin: 'France',
    material: 'Polyamide',
    description: 'The Bouroullec brothers spent five years developing a chair that grows like a plant. Branching organic forms were algorithmically refined and injection-moulded as a single piece. The Vegetal is nature translated into a material that will never decay — and a reminder that the most rigorous design can look effortless.',
    movement: 'Contemporary',
    svg: `<svg viewBox="0 0 200 205" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 76 200 C 72 185 70 170 74 158"/>
      <path d="M 76 200 C 80 185 82 172 78 158"/>
      <path d="M 124 200 C 128 185 130 170 126 158"/>
      <path d="M 124 200 C 120 185 118 172 122 158"/>
      <path d="M 74 158 Q 100 150 126 158 Q 122 168 100 170 Q 78 168 74 158 Z"/>
      <path d="M 78 156 C 74 136 72 110 76 84 C 80 58 90 40 100 34"/>
      <path d="M 122 156 C 126 136 128 110 124 84 C 120 58 110 40 100 34"/>
      <path d="M 78 118 C 62 110 50 96 48 80"/>
      <path d="M 76 88 C 60 82 50 68 50 54"/>
      <path d="M 122 118 C 138 110 150 96 152 80"/>
      <path d="M 124 88 C 140 82 150 68 150 54"/>
      <path d="M 100 34 C 90 26 84 16 90 10"/>
      <path d="M 100 34 C 110 26 116 16 110 10"/>
      <path d="M 100 34 L 100 10"/>
    </svg>`,
  },
  {
    id: 'landi',
    name: 'Landi Chair',
    designer: 'Hans Coray',
    year: '1938',
    manufacturer: 'Blattmann Metallwarenfabrik',
    origin: 'Switzerland',
    material: 'Pressed aluminium',
    description: 'Commissioned for the 1939 Swiss National Exhibition, the Landi was pressed from a single sheet of aluminium with 92 punched holes to reduce weight. It weighed just 1.5 kilograms. Coray designed it to stack and withstand weather, and it has barely changed since — one of the earliest examples of the stacking outdoor chair.',
    movement: 'Modernism',
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="68" y1="192" x2="74" y2="148"/>
      <line x1="132" y1="192" x2="126" y2="148"/>
      <line x1="76" y1="190" x2="80" y2="148"/>
      <line x1="124" y1="190" x2="120" y2="148"/>
      <path d="M 68 148 Q 100 140 132 148 Q 130 160 100 162 Q 70 160 68 148 Z"/>
      <path d="M 74 148 C 72 120 76 90 86 64 Q 94 40 100 36 Q 106 40 114 64 C 124 90 128 120 126 148"/>
      <circle cx="86" cy="153" r="2.5"/>
      <circle cx="100" cy="150" r="2.5"/>
      <circle cx="114" cy="153" r="2.5"/>
      <circle cx="88" cy="128" r="2.5"/>
      <circle cx="100" cy="125" r="2.5"/>
      <circle cx="112" cy="128" r="2.5"/>
      <circle cx="84" cy="104" r="2.5"/>
      <circle cx="100" cy="101" r="2.5"/>
      <circle cx="116" cy="104" r="2.5"/>
      <circle cx="88" cy="80" r="2.5"/>
      <circle cx="100" cy="77" r="2.5"/>
      <circle cx="112" cy="80" r="2.5"/>
      <circle cx="92" cy="58" r="2.5"/>
      <circle cx="100" cy="55" r="2.5"/>
      <circle cx="108" cy="58" r="2.5"/>
    </svg>`,
  },
  {
    id: 'favela',
    name: 'Favela Chair',
    designer: 'Fernando & Humberto Campana',
    year: '1991',
    manufacturer: 'Edra',
    origin: 'Brazil',
    material: 'Fragments of Paraná pine',
    description: 'The Campana brothers constructed a chair entirely from rough offcuts of wood nailed together in the chaotic pattern of the favela shacks that inspired it. Each piece is unique. It transforms poverty into poetry and waste into worth — a chair as social manifesto, made from nothing and worth everything.',
    movement: 'Contemporary',
    svg: `<svg viewBox="0 0 200 205" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="62" y1="200" x2="68" y2="155"/>
      <line x1="74" y1="198" x2="76" y2="155"/>
      <line x1="126" y1="200" x2="122" y2="155"/>
      <line x1="138" y1="197" x2="132" y2="155"/>
      <line x1="64" y1="178" x2="80" y2="174"/>
      <line x1="120" y1="176" x2="136" y2="179"/>
      <line x1="56" y1="155" x2="148" y2="152"/>
      <line x1="60" y1="148" x2="142" y2="145"/>
      <line x1="54" y1="162" x2="146" y2="158"/>
      <line x1="72" y1="155" x2="70" y2="38"/>
      <line x1="84" y1="152" x2="86" y2="30"/>
      <line x1="96" y1="152" x2="92" y2="24"/>
      <line x1="108" y1="152" x2="112" y2="28"/>
      <line x1="120" y1="155" x2="124" y2="40"/>
      <line x1="66" y1="118" x2="120" y2="108"/>
      <line x1="68" y1="82" x2="118" y2="74"/>
      <line x1="72" y1="50" x2="112" y2="44"/>
      <line x1="78" y1="132" x2="62" y2="96"/>
      <line x1="116" y1="128" x2="130" y2="94"/>
      <line x1="70" y1="38" x2="58" y2="30"/>
      <line x1="124" y1="40" x2="136" y2="34"/>
      <line x1="86" y1="30" x2="90" y2="18"/>
      <line x1="112" y1="28" x2="118" y2="18"/>
    </svg>`,
  },
  {
    id: 'lcw',
    name: 'LCW',
    designer: 'Charles & Ray Eames',
    year: '1945',
    manufacturer: 'Herman Miller',
    origin: 'United States',
    material: 'Molded walnut plywood, rubber shock mounts',
    description: 'The LCW grew from Eames wartime research into molded plywood for the US Navy. The seat and back are separate shells connected by a spine of rubber shock mounts, allowing each to flex independently with the body. Time magazine named it the best design of the twentieth century.',
    movement: 'Mid-Century Modern',
    svg: `<svg viewBox="0 0 200 185" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="70" y1="178" x2="76" y2="132"/>
      <line x1="130" y1="178" x2="124" y2="132"/>
      <line x1="78" y1="176" x2="82" y2="132"/>
      <line x1="122" y1="176" x2="118" y2="132"/>
      <path d="M 68 132 Q 100 122 132 132 Q 130 144 100 147 Q 70 144 68 132 Z"/>
      <line x1="100" y1="122" x2="100" y2="96"/>
      <circle cx="100" cy="109" r="4"/>
      <path d="M 76 96 Q 100 87 124 96 Q 122 108 100 111 Q 78 108 76 96 Z"/>
    </svg>`,
  },
  {
    id: 'pelican',
    name: 'Pelican Chair',
    designer: 'Finn Juhl',
    year: '1940',
    manufacturer: 'House of Finn Juhl',
    origin: 'Denmark',
    material: 'Wood frame, upholstery',
    description: 'When Juhl debuted the Pelican at the Copenhagen Cabinetmakers\' Guild Exhibition, critics ridiculed it. Its wide sweeping organic arms had no precedent in furniture. Juhl was simply ahead of his time — the chair has been in continuous production ever since, and its spreading silhouette remains one of the most joyful in all of design.',
    movement: 'Scandinavian Modern',
    svg: `<svg viewBox="0 0 200 185" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="80" y1="178" x2="86" y2="150"/>
      <line x1="120" y1="178" x2="114" y2="150"/>
      <line x1="88" y1="176" x2="91" y2="150"/>
      <line x1="112" y1="176" x2="109" y2="150"/>
      <path d="M 80 150 Q 100 142 120 150 Q 118 160 100 162 Q 82 160 80 150 Z"/>
      <path d="M 80 150 C 54 138 30 116 28 88 C 26 62 44 46 68 50 Q 82 53 88 70 Q 92 85 92 107"/>
      <path d="M 120 150 C 146 138 170 116 172 88 C 174 62 156 46 132 50 Q 118 53 112 70 Q 108 85 108 107"/>
      <path d="M 86 150 C 64 138 52 118 54 94 C 56 74 68 62 82 64"/>
      <path d="M 114 150 C 136 138 148 118 146 94 C 144 74 132 62 118 64"/>
      <path d="M 92 107 Q 100 100 108 107 Q 106 120 100 122 Q 94 120 92 107 Z"/>
    </svg>`,
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh Chair',
    designer: 'Pierre Jeanneret',
    year: '1955',
    manufacturer: 'Made in Chandigarh',
    origin: 'India',
    material: 'Teak, cane',
    description: 'Designed for the modernist city of Chandigarh — planned by his cousin Le Corbusier — Jeanneret created this chair for use in government buildings, hospitals, and universities. Made by local craftsmen in teak and cane, it was left behind when Jeanneret departed and only rediscovered decades later. The V-shaped back rail is its unmistakable signature.',
    movement: 'Modernism',
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="70" y1="192" x2="76" y2="138"/>
      <line x1="130" y1="192" x2="124" y2="138"/>
      <line x1="78" y1="190" x2="80" y2="138"/>
      <line x1="122" y1="190" x2="120" y2="138"/>
      <rect x="68" y="126" width="64" height="14" rx="1"/>
      <line x1="80" y1="127" x2="80" y2="139" stroke-opacity="0.4"/>
      <line x1="92" y1="127" x2="92" y2="139" stroke-opacity="0.4"/>
      <line x1="104" y1="127" x2="104" y2="139" stroke-opacity="0.4"/>
      <line x1="116" y1="127" x2="116" y2="139" stroke-opacity="0.4"/>
      <line x1="74" y1="126" x2="74" y2="46"/>
      <line x1="126" y1="126" x2="126" y2="46"/>
      <path d="M 74 46 L 60 30 L 100 22 L 140 30 L 126 46"/>
      <rect x="74" y="54" width="52" height="66" rx="1"/>
      <line x1="85" y1="55" x2="85" y2="119" stroke-opacity="0.4"/>
      <line x1="100" y1="55" x2="100" y2="119" stroke-opacity="0.4"/>
      <line x1="115" y1="55" x2="115" y2="119" stroke-opacity="0.4"/>
    </svg>`,
  },
  {
    id: 'cesca',
    name: 'Cesca Chair',
    designer: 'Marcel Breuer',
    year: '1928',
    manufacturer: 'Thonet',
    origin: 'Germany',
    material: 'Chrome-plated tubular steel, cane',
    description: 'Breuer\'s B32 was renamed Cesca by manufacturer Dino Gavina in the 1960s, in honour of Breuer\'s daughter Francesca. The combination of industrial chrome steel and artisanal cane was deliberately contradictory — modernity and tradition in the same object. It remains one of the most copied chairs in history.',
    movement: 'Bauhaus',
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 55 190 C 52 162 58 132 70 110 L 70 28"/>
      <path d="M 145 190 C 148 162 142 132 130 110 L 130 28"/>
      <line x1="55" y1="190" x2="145" y2="190"/>
      <line x1="70" y1="28" x2="130" y2="28"/>
      <rect x="70" y="36" width="60" height="68" rx="2"/>
      <line x1="83" y1="37" x2="83" y2="103" stroke-opacity="0.4"/>
      <line x1="100" y1="37" x2="100" y2="103" stroke-opacity="0.4"/>
      <line x1="117" y1="37" x2="117" y2="103" stroke-opacity="0.4"/>
      <rect x="70" y="110" width="60" height="16" rx="2"/>
      <line x1="83" y1="111" x2="83" y2="125" stroke-opacity="0.4"/>
      <line x1="100" y1="111" x2="100" y2="125" stroke-opacity="0.4"/>
      <line x1="117" y1="111" x2="117" y2="125" stroke-opacity="0.4"/>
    </svg>`,
  },
  {
    id: 'shell',
    name: 'Shell Chair',
    designer: 'Hans Wegner',
    year: '1963',
    manufacturer: 'Carl Hansen & Søn',
    origin: 'Denmark',
    material: 'Solid oak or walnut, paper cord or upholstery',
    description: 'Designed in 1963 but considered too difficult to manufacture, the Shell Chair sat unproduced for 35 years until Carl Hansen & Søn finally brought it to market in 1998. The seat and back form a single continuous shell of shaped hardwood supported on three legs — a structural gamble that results in extraordinary visual lightness. Like much of Wegner\'s work, it looks inevitable in retrospect, as if the chair could not have taken any other form.',
    movement: 'Scandinavian Modernism',
    svg: `<svg viewBox="0 0 200 215" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 92 28 C 70 46 64 90 74 133"/>
      <path d="M 106 36 C 86 54 80 94 90 131"/>
      <path d="M 92 28 C 97 25 104 30 106 36"/>
      <path d="M 74 133 C 96 126 120 127 140 130"/>
      <path d="M 90 131 C 110 125 130 126 147 130"/>
      <line x1="140" y1="130" x2="147" y2="130"/>
      <line x1="74" y1="133" x2="90" y2="131"/>
      <line x1="76" y1="132" x2="54" y2="194"/>
      <line x1="142" y1="130" x2="160" y2="194"/>
      <line x1="108" y1="130" x2="103" y2="196"/>
    </svg>`,
  },
  {
    id: 'barrel',
    name: 'Barrel Chair',
    designer: 'Frank Lloyd Wright',
    year: '1937',
    manufacturer: 'Cassina',
    origin: 'USA',
    material: 'Solid wood frame, upholstered fabric',
    description: 'Wright designed the Barrel Chair for Wingspread, the Herbert F. Johnson house in Wisconsin. A drum of upholstered fabric on a wooden base, it embodies his conviction that furniture should be an extension of architecture — the circular form echoing the radiating plan of the house itself. Wright was famously indifferent to bodily comfort, and the Barrel Chair reflects this: it is a sculptural object that also seats a person, in that order.',
    movement: 'Organic Architecture',
    svg: `<svg viewBox="0 0 200 215" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 58 72 C 77 61 123 61 142 72 C 123 83 77 83 58 72"/>
      <path d="M 68 76 C 82 68 118 68 132 76 C 118 84 82 84 68 76"/>
      <line x1="58" y1="72" x2="58" y2="158"/>
      <line x1="142" y1="72" x2="142" y2="158"/>
      <path d="M 58 158 C 77 147 123 147 142 158 C 123 169 77 169 58 158"/>
      <line x1="72" y1="165" x2="66" y2="196"/>
      <line x1="96" y1="168" x2="92" y2="196"/>
      <line x1="114" y1="168" x2="118" y2="196"/>
      <line x1="128" y1="165" x2="134" y2="196"/>
    </svg>`,
  },
  {
    id: 'la-chaise',
    name: 'La Chaise',
    designer: 'Charles & Ray Eames',
    year: '1948',
    manufacturer: 'Vitra',
    origin: 'USA',
    material: 'Fibreglass shell, steel rods, wood feet',
    description: 'Designed for MoMA\'s International Competition for Low-Cost Furniture Design in 1948, La Chaise was named after Gaston Lachaise\'s sculpture Floating Figure, which its shell directly echoes. The Eameses could not manufacture it at an acceptable cost, and it remained unrealised for decades. Vitra began producing it in 1990. It stands as evidence that the Eameses\' formal ambitions routinely outpaced the industrial capabilities of their era.',
    movement: 'Organic Modernism',
    svg: `<svg viewBox="0 0 200 215" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 36 100 C 38 74 72 54 113 56 C 154 58 172 80 170 108 C 168 136 142 152 106 152 C 68 152 34 130 36 112"/>
      <path d="M 36 100 C 34 104 34 108 36 112"/>
      <line x1="100" y1="152" x2="78" y2="197"/>
      <line x1="118" y1="152" x2="140" y2="197"/>
      <line x1="90" y1="152" x2="70" y2="197"/>
      <line x1="128" y1="152" x2="148" y2="197"/>
      <line x1="70" y1="197" x2="78" y2="197"/>
      <line x1="140" y1="197" x2="148" y2="197"/>
      <line x1="74" y1="180" x2="144" y2="180"/>
    </svg>`,
  },
  {
    id: 'cantilever',
    name: 'S 33 / MR Chair',
    designer: 'Mart Stam / Mies van der Rohe',
    year: '1926',
    manufacturer: 'Thonet / Knoll',
    origin: 'Germany',
    material: 'Tubular steel, cane or leather',
    description: 'In 1926 Mart Stam sketched a chair with no back legs, cantilevering the seat from the front frame alone. Mies van der Rohe saw Stam\'s prototype at the Weissenhof Siedlung and produced his own version a year later — more refined, with curved spring steel rather than Stam\'s rigid pipe. Both went into production through Thonet; both designers claimed priority. Courts eventually ruled Stam\'s concept came first but Mies\'s execution superior. The cantilever principle they argued over freed chair design from four legs forever.',
    movement: 'Bauhaus',
    svg: `<svg viewBox="0 0 200 215" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M 52 26 L 70 108 L 148 102 C 155 102 160 107 160 114 L 160 186 L 68 186"/>
      <path d="M 66 32 L 84 114 L 160 108 C 167 108 172 113 172 120 L 172 188 L 82 188"/>
      <line x1="52" y1="26" x2="66" y2="32"/>
      <line x1="59" y1="58" x2="73" y2="64"/>
      <line x1="66" y1="90" x2="80" y2="96"/>
      <line x1="70" y1="108" x2="84" y2="114"/>
      <line x1="109" y1="104" x2="123" y2="110"/>
      <line x1="148" y1="102" x2="160" y2="108"/>
    </svg>`,
  },
];

export default chairs;
