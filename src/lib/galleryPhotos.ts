// Shared gallery photo catalog — imported by the server page (for ImageGallery
// schema) and the client grid (for the filterable display).

export type GalleryPhoto = {
  src: string
  alt: string
  category: string
  title: string
}

export const photos: GalleryPhoto[] = [
  { src: '/images/new-construction-modern-white-brick.jpg', alt: 'Custom new home construction with modern white brick exterior — Raceland, LA', category: 'New Construction', title: 'Modern White Brick New Build' },
  { src: '/images/new-construction-cottage-brick.jpg', alt: 'Brick cottage-style home with covered front porch — Lafourche Parish', category: 'New Construction', title: 'Brick Cottage with Covered Porch' },
  { src: '/images/roofing-aerial-shingles-raceland.jpg', alt: 'Aerial view of new architectural shingle roof installation — Raceland, LA', category: 'Roofing', title: 'Aerial Architectural Shingle Roof' },
  { src: '/images/roofing-gable-shingle-detail.jpg', alt: 'Detail of new gable shingle roof against white siding — Raceland, LA', category: 'Roofing', title: 'Gable Shingle Detail' },
  { src: '/images/roof-before-replacement-aerial.jpg', alt: 'Drone view of an aged, streaked shingle roof at the start of a Foret Construction roof replacement — south Louisiana', category: 'Roofing', title: 'Before: Aged Shingle Roof' },
  { src: '/images/crew-roof-tearoff.jpg', alt: 'Foret Construction crew tearing off old shingles down to the decking during a roof replacement', category: 'Roofing', title: 'Crew Mid Tear-Off' },
  { src: '/images/roof-replacement-complete-aerial.jpg', alt: 'Drone view of a completed architectural shingle roof replacement by Foret Construction — south Louisiana', category: 'Roofing', title: 'Completed Shingle Roof — Drone View' },
  { src: '/images/fortified-roof-ibhs-graphic.jpg', alt: 'FORTIFIED Roof IBHS program graphic — protecting homes in hurricane country', category: 'FORTIFIED Roofing', title: 'FORTIFIED Roof Program' },
  { src: '/images/addition-screened-patio-brick-home.jpg', alt: 'Screened patio addition tied into brick home — Lafourche Parish', category: 'Additions', title: 'Screened Patio Addition' },
  { src: '/images/addition-covered-patio-wood-ceiling.jpg', alt: 'Covered patio addition with tongue-and-groove wood ceiling — Lafourche Parish', category: 'Additions', title: 'Covered Patio with Wood Ceiling' },
  { src: '/images/addition-pool-house-completed.jpg', alt: 'Completed pool house and pool with custom concrete decking — Lafourche Parish', category: 'Additions', title: 'Pool House & Pool Build' },
  { src: '/images/addition-pool-house-tyvek-progress.jpg', alt: 'Pool house addition under construction with Tyvek wrap — Lafourche Parish', category: 'Additions', title: 'Pool House In Progress' },
  { src: '/images/remodel-bathroom-marble-vanity-barn-door.jpg', alt: 'Modern bathroom remodel with marble vanity, dark cabinetry, and barn door', category: 'Remodeling', title: 'Modern Bathroom Remodel' },
  { src: '/images/remodel-fireplace-tyvek-progress.jpg', alt: 'Custom interior fireplace surround framing — remodel in progress', category: 'Remodeling', title: 'Custom Fireplace Build' },
  { src: '/images/remodel-vinyl-siding-shutters.jpg', alt: 'Two-story home with vinyl siding and black shutters — exterior update', category: 'Remodeling', title: 'Exterior Siding Update' },
  { src: '/images/remodel-interior-framing-progress.jpg', alt: 'Interior framing for storm-rated room — Foret Construction Raceland', category: 'Remodeling', title: 'Interior Framing Progress' },
  { src: '/images/concrete-slab-formed-rebar.jpg', alt: 'Concrete slab forming with rebar grid — outdoor structure pad', category: 'Concrete', title: 'Slab Foundation Pour' },
  { src: '/images/concrete-bobcat-grading-pad.jpg', alt: 'Concrete pad grading with Bobcat excavator — Foret Construction crew', category: 'Concrete', title: 'Pad Grading & Prep' },
  { src: '/images/concrete-pool-house-framing-pad.jpg', alt: 'Pool house framing on new concrete pad — Lafourche Parish', category: 'Concrete', title: 'Pool House Slab & Framing' },
  { src: '/images/gutters-black-aluminum-white-siding.jpg', alt: 'Black aluminum gutters installed on white siding — Raceland, LA', category: 'Roofing', title: 'Black Aluminum Gutters' },
]

export const categories = ['All', 'New Construction', 'Roofing', 'FORTIFIED Roofing', 'Additions', 'Remodeling', 'Concrete']
