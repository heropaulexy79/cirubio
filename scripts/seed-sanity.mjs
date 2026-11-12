import fs from 'node:fs'
import path from 'node:path'
import { createClient } from 'next-sanity'

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return
  const content = fs.readFileSync(filePath, 'utf8')
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const eqIdx = line.indexOf('=')
    if (eqIdx === -1) continue
    const key = line.slice(0, eqIdx).trim()
    let value = line.slice(eqIdx + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    if (!process.env[key]) {
      process.env[key] = value
    }
  }
}

loadEnvFile(path.resolve(process.cwd(), '.env.local'))
loadEnvFile(path.resolve(process.cwd(), '.env'))

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'
const token = process.env.SANITY_API_TOKEN
const forceOverwrite = process.argv.includes('--force')

if (!projectId || projectId === 'placeholder-project-id' || !token) {
  console.error(
    [
      'Missing Sanity credentials for seeding.',
      'Please add both NEXT_PUBLIC_SANITY_PROJECT_ID and a write-enabled SANITY_API_TOKEN to .env.local:',
      '',
      '  NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id',
      '  NEXT_PUBLIC_SANITY_DATASET=production',
      '  NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01',
      '  SANITY_API_TOKEN=your-editor-token',
      '',
      'Then run: npm run seed:cms (or npm run seed:cms -- --force to overwrite existing CMS docs)',
    ].join('\n'),
  )
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

const documents = [
  {
    _id: 'hero',
    _type: 'hero',
    slides: [
      {
        _key: 'slide-1',
        _type: 'heroSlide',
        title: "Advancing Africa's transition\nto a bio-circular economy",
        subtext:
          'Transforming organic waste into sustainable resources that power agriculture, strengthen food systems, and accelerate climate action across Africa.',
        videoUrl:
          'https://pub-95f6a0295449459292ad27c9169c0b00.r2.dev/Homepage%20-%20Hero%20Slider%201.mp4',
        buttons: [
          {
            _key: 'btn-1-1',
            _type: 'slideButton',
            text: 'Explore our solution',
            href: '/services',
            variant: 'solid',
          },
          {
            _key: 'btn-1-2',
            _type: 'slideButton',
            text: 'Partner With Us',
            href: '/contact',
            variant: 'outline',
          },
        ],
      },
      {
        _key: 'slide-2',
        _type: 'heroSlide',
        title: 'Turning Waste into\nHigh Value Resources',
        subtext:
          'We upcycle organic waste into sustainable protein ingredients, organic fertilisers, and functional oils, creating value for industries while reducing environmental impact.',
        videoUrl:
          'https://pub-95f6a0295449459292ad27c9169c0b00.r2.dev/Home%20page%20-%20Hero%20Slider%202.mp4',
        buttons: [
          {
            _key: 'btn-2-1',
            _type: 'slideButton',
            text: 'Discover our Products',
            href: '/products',
            variant: 'solid',
          },
        ],
      },
      {
        _key: 'slide-3',
        _type: 'heroSlide',
        title: 'Building Climate-Smart\nAgriculture for Africa',
        subtext:
          'Through innovative bio-refining technology and data-driven sustainability solutions, we help businesses reduce emissions, improve resource efficiency, and achieve measurable ESG outcomes.',
        videoUrl:
          'https://pub-95f6a0295449459292ad27c9169c0b00.r2.dev/Home%20Page%20-%20Hero%20Slider%203.mp4',
        buttons: [
          {
            _key: 'btn-3-1',
            _type: 'slideButton',
            text: 'View Our Impact',
            href: '/sustainability',
            variant: 'solid',
          },
          {
            _key: 'btn-3-2',
            _type: 'slideButton',
            text: 'Explore Our Technology',
            href: '/technology',
            variant: 'outline',
          },
        ],
      },
    ],
  },

  {
    _id: 'homePage',
    _type: 'homePage',
    introBadge: 'About Us',
    introHeadline:
      'Driving Innovation at the Intersection of Organic Waste Management, Sustainable Agriculture and Climate Resilience',
    introDescription:
      'We are building a new generation of bio-refineries that combine Black Soldier Fly biotechnology, automated production systems, and real-time environmental intelligence to upcycle organic waste into high-value resources for agriculture and industry. Our goal is to unlock the value trapped in organic waste while supporting sustainable agriculture, reducing carbon emissions, providing transparent ESG insights, and fostering a truly circular economy across Africa.',
    introButtonText: 'Discover our story',
    introButtonLink: '/about',
    wasteBadge: 'Value Proposition',
    wasteHeadline: 'Turning Waste into Value',
    wasteDescription:
      'Grub Bio leverages Black Soldier Fly biotechnology, circular bio-manufacturing, and digital sustainability intelligence to upcycle organic waste into high-value alternative proteins, organic fertilisers, and functional oils for agriculture, aquaculture, livestock production, and industrial applications. Through our integrated SaaS platform, we provide stakeholders with real-time environmental intelligence, enabling transparent tracking of waste diversion, carbon-emission avoidance, resource recovery, and ESG performance.',
    featuresLabel: 'Our Impact Pillars',
    featuresTitle: 'How we create change',
    featuresDescription: 'Four pillars driving sustainable transformation',
    pillars: [
      {
        _key: 'pillar-1',
        title: 'Waste\nManagement',
        description:
          'Diverting organic waste from landfills and uncontrolled disposal while creating valuable circular economy products.',
      },
      {
        _key: 'pillar-2',
        title: 'Sustainable\nAgriculture',
        description:
          'Producing sustainable animal feed ingredients and organic soil enhancers that support resilient food production systems.',
      },
      {
        _key: 'pillar-3',
        title: 'Climate\nChange',
        description:
          'Reducing greenhouse gas emissions through carbon-emission avoidance and resource-efficient bio-manufacturing.',
      },
      {
        _key: 'pillar-4',
        title: 'Sustainability\nIntelligence',
        description:
          'Leveraging automation, real-time monitoring, and ESG analytics to optimize bio-manufacturing processes while delivering transparent, auditable sustainability metrics.',
      },
    ],
    productsLabel: 'Products',
    productsTitle: 'What we produce',
    productsDescription: 'Sustainable outputs from our circular process',
    servicesLabel: 'Our Services',
    servicesTitle: 'What we deliver',
    servicesDescription: 'Four integrated solutions for sustainable transformation',
    servicesCards: [
      {
        _key: 'svc-1',
        title: 'Organic Waste Upcycling',
        description:
          'Converting agricultural, food processing, and market waste into valuable resources.',
      },
      {
        _key: 'svc-2',
        title: 'ESG & Sustainability Reporting',
        description:
          'Providing traceable sustainability data and environmental impact reporting for partners.',
      },
      {
        _key: 'svc-3',
        title: 'Climate Smart and Sustainable Agriculture',
        description:
          'Creating a circular system that simultaneously optimizes food production, reduces environmental degradation, and builds climate resilience.',
      },
      {
        _key: 'svc-4',
        title: 'Circular Economy Partnerships',
        description:
          'Developing tailored solutions for businesses, municipalities, and agricultural stakeholders.',
      },
    ],
    dataBadge: 'Technology Dashboard',
    dataHeadline: 'Data-driven sustainability',
    dataDescription:
      'Access real-time insights into waste diverted, carbon-emission avoidance, contributions to SDGs, resource recovery and circular economy performance through our Digital Sustainability Platform.',
    dataButtonText: 'Explore our technologies',
    dataButtonLink: '/technology',
    metricsBadge: 'Impact',
    metricsHeadline: 'Measurable\noutcomes\nfrom our work',
    metricsDescription:
      "Real data demonstrating the scale of our contribution to Africa's circular bio-economy.",
  },

  {
    _id: 'about',
    _type: 'about',
    heroBadge: 'About Us',
    heroHeadline: "Building Circular Solutions\nfor Africa's Future",
    heroSubheadline:
      'Grub Bio is a technology-enabled (B2B SaaS), bio-manufacturing company transforming organic waste into high-value resources through advanced Black Soldier Fly biotechnology, data-driven operations, and digital sustainability solutions.',
    introParagraph1:
      'Operating at the intersection of waste management, sustainable agriculture, and climate action, we leverage automation, real-time monitoring, and circular bio-refining systems to create measurable environmental and economic value.',
    introParagraph2:
      "Our goal is simple: to turn waste into opportunity while strengthening food systems, supporting environmental sustainability, providing real-time ESG insights, and advancing Africa's transition to a bio-circular economy.",
    bioTitle: 'Bio-Manufacturing for a Circular Economy',
    challengeTitle: 'The Challenge',
    challengeText1:
      'Across Africa, millions of tonnes of organic waste are generated annually from agricultural activities, food processing facilities, markets, livestock operations, and municipal sources. Much of this waste is improperly managed, contributing to greenhouse gas emissions, environmental degradation, and lost economic value.',
    challengeText2:
      'At the same time, the continent faces growing demand for sustainable protein and resilient agricultural inputs, while many organisations struggle to transparently measure and audit their environmental impact in line with evolving global ESG reporting requirements.',
    solutionTitle: 'Our Solution',
    solutionText1:
      "Our approach addresses a critical structural gap: Africa’s protein supply remains heavily exposed to import dependency, climate volatility, and resource-intensive production systems. Grub Bio provides a locally anchored alternative—one that is resilient, cost-efficient, and environmentally responsible.",
    solutionText2:
      'Through our integrated model, we enable partners to transition from linear, extractive supply chains to circular, value-generating systems—turning waste into productive assets while strengthening food security, improving farmer economics, and advancing measurable ESG outcomes.',
    missionVisionBadge: 'Mission and Vision',
    missionVisionHeadline: 'Bridging the Gap\nBetween Waste and\nLife',
    missionTitle: 'Mission',
    missionText:
      'To bridge the gap between industrial waste and life through world-class bio-manufacturing — enabling partners to transition from linear, extractive supply chains to circular, value-generating systems.',
    visionTitle: 'Vision',
    visionText:
      "A world where organic waste is obsolete and nutrition is infinite — protein production that is locally sourced, decoupled from global supply shocks, environmentally regenerative, and scalable for Africa's growing population.",
    founderTitle: 'A New Approach to Growth and Sustainability',
    founderQuote:
      "Africa's future depends on our ability to rethink organic waste—not as a burden, but as a valuable resource. At Grub Bio, we believe that the solutions to some of our greatest challenges in food security, agriculture, and climate resilience already exist within the resources we discard every day.",
    founderName: 'Oladipo Williams, Founder & CEO',
    circularBadge: 'Our Bio-Manufacturing Facility',
    circularTitle: 'Demonstrating the Future of Circular Production',
    circularDescription:
      "Our bio-manufacturing facility serves as the foundation for Grub Bio's scalable growth strategy. Designed as a modern bio-refinery, the facility utilizes Black Soldier Fly technology to convert organic waste into high-value products through a resource-efficient production process. The facility also serves as a proving ground for our digital sustainability systems, operational excellence framework, and future expansion model across agricultural and industrial clusters.",
    circularFeatures: [
      'Organic waste upcycling and nutrient recovery',
      'Production of sustainable protein, functional oils, and organic fertilisers',
      'Technology-enabled monitoring and process optimization',
      'Real time sustainability and impact measurement',
    ],
    recoveryBadge: 'Our Impact Vision',
    recoveryTitle: 'Resource Recovery for Food Security',
    recoveryIntro1:
      "Africa's growing population requires resilient food production systems, sustainable agricultural inputs, and more efficient resource utilisation. At the same time, millions of tonnes of valuable organic resources are lost annually through inefficient waste management practices.",
    recoveryIntro2:
      'Grub Bio is helping bridge this gap by recovering nutrients from organic waste streams and converting them into high-value products that support agriculture, animal nutrition, and environmental sustainability.',
    recoveryPoints: [
      'Recover valuable nutrients from underutilized organic waste streams',
      'Strengthen local food and feed production systems',
      'Reduce dependence on imported agricultural inputs',
      'Support sustainable agriculture and soil regeneration',
      'Divert organic waste from landfills and unmanaged disposal pathways',
      'Reduce methane emissions through resource recovery and upcycling',
      'Create economic value and new opportunities across agricultural value chains',
      'Deliver transparent and auditable ESG and sustainability metrics through our digital platform',
    ],
    recoveryConclusion:
      'By turning waste into productive resources, we are building a more resilient, resource-efficient, and food-secure future for Africa.',
    sdgBadge: 'Sustainable Development Goals',
    sdgTitle: 'Advancing Global Goals\nThrough Local Action',
    sdgDescription:
      'Our business model contributes directly to the following United Nations Sustainable Development Goals:',
    sdgs: [
      { _key: 'about-sdg-2', title: 'Zero Hunger' },
      { _key: 'about-sdg-6', title: 'Clean Water and Sanitation' },
      { _key: 'about-sdg-8', title: 'Decent Work and Economic Growth' },
      { _key: 'about-sdg-9', title: 'Industry, Innovation and Infrastructure' },
      { _key: 'about-sdg-14', title: 'Life Below Water' },
      { _key: 'about-sdg-11', title: 'Sustainable Cities and Communities' },
      { _key: 'about-sdg-12', title: 'Responsible Consumption and Production' },
      { _key: 'about-sdg-13', title: 'Climate Action' },
      { _key: 'about-sdg-15', title: 'Life on Land' },
    ],
  },

  {
    _id: 'productsPage',
    _type: 'productsPage',
    heroBadge: 'Our Products',
    heroHeadline: 'Sustainable Solutions from Circular Bio-Manufacturing',
    heroSubheadline:
      'Through innovative Black Soldier Fly technology, Grub Bio transforms organic waste into high-value products that support sustainable agriculture, animal nutrition, and industrial applications.',
    proteinBadge: 'Protein Products',
    proteinSectionTitle: 'Black Soldier Fly Larvae Meal',
    proteinSectionSubheadline:
      'A sustainable, locally produced protein ingredient designed to support the growing demand for high-performance animal nutrition.',
    fullFatTitle: 'Full-Fat BSF Larvae Meal',
    fullFatDescription:
      'A nutrient-dense protein and energy source for poultry, aquaculture, and livestock feed formulations.',
    fullFatBenefits: [
      'High-quality protein with natural energy-rich lipids',
      'Supports growth performance and feed efficiency',
      'Sustainable alternative to imported protein ingredients',
      'Produced through a resource-efficient circular process',
    ],
    defattedTitle: 'Defatted BSF Larvae Meal',
    defattedDescription:
      'A concentrated protein ingredient developed for advanced feed formulations requiring higher protein inclusion levels.',
    defattedBenefits: [
      'High protein concentration for optimized feed performance',
      'Excellent digestibility and nutrient availability',
      'Suitable for poultry, aquaculture, and livestock applications',
      'Helps reduce dependence on conventional protein sources',
    ],
    lipidsBadge: 'Functional Lipids',
    lipidsTitle: 'BSF Oil',
    lipidsDescription:
      'A renewable lipid source with applications across animal nutrition and industrial value chains.',
    lipidsFeatureTitle: 'Functional Lipids for Animal Nutrition',
    lipidsFeatureDescription:
      'Derived from Black Soldier Fly larvae, our lipids provide an energy-dense source of fatty acids with high lauric acid content, known for supporting gut health and metabolic efficiency in animals.',
    lipidsBenefits: [
      'Improved energy utilization',
      'Supports gut health and animal resilience',
      'Enhances feed formulation flexibility',
      'Sustainable alternative to conventional feed oils',
    ],
    fertilizerBadge: 'Organic Fertilizer',
    fertilizerTitle: 'BSF Frass',
    fertilizerDescription:
      'A nutrient-rich organic fertiliser produced through the natural bioconversion process of Black Soldier Fly larvae.',
    fertilizerBenefits: [
      'Rich in organic matter and essential nutrients',
      'Improves soil structure and water retention',
      'Enhances microbial activity for healthier crops',
      '100% natural and eco-friendly soil conditioner',
    ],
    ctaBadge: 'Partner With Us',
    ctaTitle: 'Ready to Source Sustainable Insect Products?',
    ctaDescription:
      'Contact our product specialist team to request product specifications, pricing, and sample batches for testing.',
    ctaButtonText: 'Contact Sales',
    ctaButtonLink: '/contact',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        _key: 'pfaq-1',
        question: 'What types of organic waste does Grub Bio accept?',
        answer:
          'We primarily work with agricultural residues, food processing by-products, market waste, slaughterhouse by-products, and other suitable organic waste streams.',
      },
      {
        _key: 'pfaq-2',
        question: 'Do you offer long-term waste management contracts?',
        answer:
          'Yes, we establish long-term partnerships with agricultural producers, food processors, and municipalities to provide consistent, reliable, and sustainable waste management solutions.',
      },
      {
        _key: 'pfaq-3',
        question: 'How does Grub Bio ensure waste traceability?',
        answer:
          'Our Digital Sustainability Platform tracks organic waste from collection through bio-conversion, providing our partners with fully auditable data on resource recovery and emissions avoidance.',
      },
      {
        _key: 'pfaq-4',
        question: 'Can Grub Bio provide ESG and sustainability reporting?',
        answer:
          'Absolutely. We provide our partners with detailed metrics on waste diverted, carbon emissions avoided, and other key sustainability indicators that align with global ESG reporting standards.',
      },
      {
        _key: 'pfaq-5',
        question: 'What products are generated from the waste you collect?',
        answer:
          'Our bio-manufacturing process converts organic waste into high-value Black Soldier Fly (BSF) products, including Full-Fat and Defatted Insect Protein Meal, Functional Oils, and Organic Fertilizer (Frass).',
      },
      {
        _key: 'pfaq-6',
        question: 'Who can partner with Grub Bio?',
        answer:
          'We partner with waste generators (farms, food processors, municipalities) looking for sustainable disposal solutions, as well as feed manufacturers, livestock farmers, and industrial businesses seeking high-quality, sustainable inputs.',
      },
      {
        _key: 'pfaq-7',
        question: 'Are your products suitable for commercial agriculture?',
        answer:
          'Yes, our BSF Protein Meal and Functional Oils are specifically engineered to meet the nutritional requirements of commercial poultry, aquaculture, and livestock operations. Our Organic Fertilizer is designed for both smallholder and commercial farming.',
      },
      {
        _key: 'pfaq-8',
        question: 'How can I become a waste supply or offtake partner?',
        answer:
          'You can easily get started by contacting our team through our website or reaching out directly to our partnership division to discuss your specific needs and how we can collaborate.',
      },
    ],
    contactTitle: 'Contact us',
    contactDescription:
      'We are eager to partner with feed producers, farmers, and distributors.',
    contactButtonText: 'Get Started',
    contactButtonLink: '/contact',
  },

  {
    _id: 'servicesPage',
    _type: 'servicesPage',
    heroBadge: 'Our Services',
    heroHeadline:
      'Enabling Circular Value Across Agriculture, Industry, and Communities',
    heroSubheadline:
      'Grub Bio delivers integrated solutions that transform organic waste into valuable resources while helping organisations achieve their sustainability, operational, and climate objectives. Through our bio-manufacturing solution, we create circular systems that connect waste recovery, resource efficiency, and sustainable production.',
    bioManufacturingTitle: 'Turning Organic Waste into Valuable Resources',
    bioManufacturingDescription:
      'Our circular bio-manufacturing model transforms organic waste streams into sustainable proteins, functional oils, and organic fertilisers through innovative Black Soldier Fly technology.',
    bioManufacturingSubdescription:
      'By recovering nutrients from low value waste streams, we produce sustainable proteins, functional oils, and organic fertilisers that support agriculture, industry, and environmental sustainability. This closed-loop approach enables the continuous circulation of resources while reducing waste and maximising value creation.',
    bioManufacturingBenefits:
      'Our solution helps organisations and municipalities convert waste from a disposal challenge into a valuable resource stream. By supporting circular economy objectives, reducing landfill dependency, and lowering environmental impact, we create measurable sustainability outcomes while contributing to more resilient agricultural and industrial value chains.',
    wasteSolutionsTitle: 'Sustainable Waste Upcycling Solutions',
    wasteSolutionsDescription:
      'We partner with food processors, agricultural operations, and commercial entities to divert organic waste from landfills and convert it into high-value bio-based products.',
    wasteSolutionsBenefits: [
      'Zero-landfill organic waste diversion',
      'Verifiable carbon footprint reduction & ESG compliance',
      'Cost-effective waste handling & processing',
      'Closed-loop resource upcycling for industrial facilities',
    ],
    whoWeServeBadge: 'Who We Serve',
    whoWeServeTitle: 'Creating Value Across the\nCircular Economy',
    whoWeServeDescription:
      'Our solutions are designed to help businesses, agricultural producers, and public sector organisations transform organic waste into measurable environmental and economic value.',
    whoWeServeCards: [
      {
        _key: 'serve-1',
        title: 'Food & Beverage\nManufacturers',
        description:
          'Food processing and manufacturing operations generate significant volumes of organic by-products that often become costly disposal challenges. Grub Bio provides a structured pathway for recovering value from these waste streams through our bio-refinery platform.\n\nBy integrating with our circular bio-manufacturing model, manufacturers can reduce landfill dependency, lower waste management costs, strengthen ESG performance, and generate measurable sustainability outcomes through resource recovery and carbon-emission avoidance.',
      },
      {
        _key: 'serve-2',
        title: 'Integrated Farms &\nAgricultural Processors',
        description:
          'Agricultural producers and integrated farming operations often manage multiple waste streams across production systems. We help create closed-loop models where organic waste is upcycled into valuable feed ingredients and organic soil enhancers.\n\nThis approach improves resource efficiency, reduces input costs, strengthens sustainability performance, and creates additional value streams within existing agricultural operations.',
      },
      {
        _key: 'serve-3',
        title: 'Municipalities & Waste\nManagement Authorities',
        description:
          'Cities and communities face increasing pressure to manage growing volumes of organic waste while meeting environmental and climate objectives. Grub Bio supports urban and regional waste management systems by recovering the organic fraction of municipal waste and converting it into valuable bio-based products.\n\nOur model reduces landfill pressure, lowers methane emissions, and contributes to cleaner, more resource-efficient communities aligned with sustainability and climate goals.',
      },
      {
        _key: 'serve-4',
        title: 'Feed Millers',
        description:
          'Feed manufacturers continue to face rising production costs driven by dependence on imported protein ingredients, foreign exchange volatility, and supply chain disruptions. These challenges create pricing uncertainty and reduce long-term planning stability.\n\nGrub Bio provides a locally produced, sustainable protein alternative that reduces import dependence, shortens supply chains, and improves input availability. By incorporating upcycled protein ingredients into feed formulations, feed millers can achieve greater cost control, improved supply security, and stronger alignment with sustainability objectives.',
      },
      {
        _key: 'serve-5',
        title: 'Smallholder Farmers',
        description:
          "Millions of smallholder farmers face rising fertiliser costs, declining soil health, and increasing pressure to maintain productivity. Heavy reliance on imported and synthetic inputs has made farming more expensive and less resilient.\n\nGrub Bio's organic fertiliser provides an affordable, locally produced alternative that helps restore soil health, improve water retention, and enhance nutrient availability. By supporting regenerative agriculture practices, we help farmers increase productivity while reducing reliance on carbon-intensive agricultural inputs.",
      },
    ],
    ctaTitle: 'Accelerate your transition to a circular business model',
    ctaDescription:
      'Discover how Grub Bio can help your organization convert organic waste into value while achieving sustainability and ESG goals.',
    ctaButtonText: 'Partner With Us',
    ctaButtonLink: '/contact',
    partnershipsBadge: 'Partnerships & Collaboration',
    partnershipsTitle: 'Building Collaborative Ecosystems',
    partnershipsDescription:
      'We believe systemic transformation requires collaboration across industries, governments, research institutions, and communities. Grub Bio works closely with strategic partners to develop scalable circular economy solutions.',
    partnershipsPoints: [
      'Commercial offtake agreements for insect protein and organic fertiliser',
      'Municipal and commercial organic waste collection contracts',
      'Joint research and biotechnology advancement programs',
      'Carbon credit and verified emissions reduction partnerships',
    ],
    finalCtaTitle: 'Ready to Transform Your Organic Waste?',
    finalCtaDescription:
      'Contact our sustainability team to discuss how we can partner with your business or municipality.',
    finalCtaButtonText: 'Contact Us',
    finalCtaButtonLink: '/contact',
  },

  {
    _id: 'sustainability',
    _type: 'sustainability',
    heroBadge: 'Sustainability',
    heroHeadline: 'Driving Measurable\nImpact Through Circular\nInnovation',
    heroSubheadline:
      'At Grub Bio, sustainability is embedded in every stage of our operations. Our technology enabled, bio-manufacturing solution transforms organic waste into valuable resources while generating measurable environmental, social, and economic benefits. By combining biotechnology, circular production systems, and digital sustainability intelligence, we help build more resilient food systems and a more sustainable future for Africa.',
    introBadge: 'ESG Leadership & Strategy',
    introTitle: 'Sustainability\nBacked by Data',
    introParagraph1:
      'We believe that sustainability should be measurable, transparent, and actionable. Our technology-enabled approach combines circular bio-manufacturing with real-time sustainability monitoring, allowing us to quantify sustainability outcomes across our operations and partnerships.',
    introParagraph2:
      'From carbon-emission avoidance and organic waste diversion to resource recovery and soil regeneration, we provide verifiable environmental data that supports corporate sustainability reporting, regulatory compliance, and climate action goals.',
    circularBadge: 'Circular Economy Impact',
    circularTitle: 'Transforming Waste\ninto Opportunity',
    circularParagraph1:
      'Organic waste is one of Africa’s most underutilised resources. Instead of allowing valuable nutrients to end up in landfills, we divert and upcycle organic waste into sustainable protein ingredients, functional oils, and organic fertilisers.',
    circularParagraph2:
      'Our technology enabled, bioconversion model helps businesses and communities reduce waste, improve resource efficiency, and accelerate the transition to a bio-circular economy.',
    circularBenefits: [
      'Recover organic waste from agricultural, industrial, and municipal sources',
      'Upcycle waste into valuable agricultural and industrial inputs',
      'Return nutrients back into productive use',
      'Reduce landfill dependency and environmental impact',
    ],
    climateBadge: 'Climate-Smart Agriculture',
    climateTitle: 'Supporting Climate\nAction Through Bio-\nManufacturing',
    climateParagraph1:
      'Our solutions contribute to climate resilience by reducing emissions associated with organic waste decomposition and by providing sustainable alternatives to resource-intensive agricultural inputs.',
    climateParagraph2:
      'Through waste diversion and nutrient recovery, we help avoid methane emissions that would otherwise occur when organic waste is disposed of in landfills or unmanaged environments. Our products also support regenerative agricultural practices that improve soil health and reduce dependence on carbon-intensive inputs.',
    climatePoints: [
      'Methane-emission avoidance through organic waste recovery',
      'Reduced reliance on imported protein ingredients',
      'Lower environmental footprint compared to conventional feed sources',
      'Improved soil health and regenerative agriculture outcomes',
      'Support for carbon-emission avoidance and resource efficiency',
    ],
    sdgBadge: 'Sustainable Development Goals (SDGs)',
    sdgTitle: 'Advancing Global Goals\nThrough Local Action',
    sdgDescription:
      "At Grub Bio, sustainability is not an add-on—it's embedded within our business model. By transforming organic waste into valuable agricultural and industrial resources, we address some of the world's most pressing challenges, including food security, waste management, climate change, resource efficiency, and ecosystem preservation.\n\nOur bio-circular economy approach aligns with several United Nations Sustainable Development Goals (SDGs), creating measurable environmental, social, and economic impact across the communities and industries we serve.",
    sdgItems: [
      {
        _key: 'sdg-2',
        title: 'SDG 2 – Zero Hunger',
        description:
          'We support food security by producing sustainable, locally sourced protein ingredients for animal feed and organic fertilisers that improve agricultural productivity. By strengthening local food production systems and reducing dependence on imported inputs, we contribute to more resilient and affordable food value chains.',
      },
      {
        _key: 'sdg-6',
        title: 'SDG 6 – Clean Water and Sanitation',
        description:
          'Improperly managed organic waste can contaminate natural water systems and surrounding ecosystems. Through responsible waste recovery and nutrient recycling, we help reduce environmental pollution while promoting more sustainable management of organic waste streams.',
      },
      {
        _key: 'sdg-8',
        title: 'SDG 8 – Decent Work and Economic Growth',
        description:
          "Our bio-manufacturing model creates new economic opportunities across waste recovery, agriculture, logistics, processing, and sustainability services. As we scale, we contribute to job creation, local enterprise development, and the growth of green industries within Africa's emerging bio-circular economy.",
      },
      {
        _key: 'sdg-9',
        title: 'SDG 9 – Industry, Innovation and Infrastructure',
        description:
          'Grub Bio is advancing industrial innovation through biotechnology, AI, automation, and digital sustainability systems. Our bio-refineries and technology-enabled production platforms help build resilient, resource-efficient infrastructure that supports sustainable industrial development.',
      },
      {
        _key: 'sdg-11',
        title: 'SDG 11 – Sustainable Cities and Communities',
        description:
          'We support municipalities and communities by diverting organic waste from landfills and unmanaged disposal pathways. This contributes to cleaner cities, improved waste management systems, and more sustainable urban environments.',
      },
      {
        _key: 'sdg-12',
        title: 'SDG 12 – Responsible Consumption',
        description:
          'Our business is founded on circular economy principles. By recovering nutrients from organic waste and converting them into valuable products, we extend resource lifecycles, reduce waste generation, and promote more responsible production and consumption patterns.',
      },
      {
        _key: 'sdg-13',
        title: 'SDG 13 – Climate Action',
        description:
          'Organic waste is a significant source of greenhouse gas emissions when left to decompose unmanaged. Through waste diversion, nutrient recovery, and sustainable bio-manufacturing, we help avoid methane emissions, reduce carbon intensity within agricultural supply chains, and support climate-resilient food production systems.',
      },
      {
        _key: 'sdg-14',
        title: 'SDG 14 – Life Below Water',
        description:
          'By providing sustainable alternatives to conventional fishmeal, Grub Bio helps reduce pressure on wild fish stocks and marine ecosystems. Our insect-based protein contributes to more sustainable aquaculture and animal feed systems, supporting the long-term health of aquatic biodiversity.',
      },
      {
        _key: 'sdg-15',
        title: 'SDG 15 – Life on Land',
        description:
          'Our organic fertilisers support soil regeneration, improve soil biodiversity, and reduce dependence on synthetic agricultural inputs. Through sustainable land-use practices and nutrient recycling, we contribute to healthier ecosystems and more resilient agricultural landscapes.',
      },
    ],
    buildingBadge: 'Long-term Impact',
    buildingTitle: 'Building Impact\nBeyond Products',
    buildingParagraph1:
      'Every tonne of organic waste recovered, every kilogram of sustainable protein produced, and every sustainability metric tracked contributes to a broader vision: building a resilient, low-carbon, and resource-efficient future for Africa through the principles of the bio-circular economy.',
    buildingButtonText: 'Partner With Us to Drive Circular Impact',
    buildingButtonLink: '/contact',
    stayConnectedTitle: 'Stay connected with\nGrub Bio',
    stayConnectedDescription:
      "Receive updates on bio-circular innovation, sustainable agriculture, climate impact, industry insights, and Grub Bio's latest developments.",
  },

  {
    _id: 'technology',
    _type: 'technology',
    heroBadge: 'Our Technology',
    heroHeadline: 'Where Biotechnology Meets\nSustainability Intelligence',
    heroSubheadline:
      'Grub Bio combines advanced Black Soldier Fly biotechnology, automated production systems, and digital sustainability solutions to create a smarter approach to waste recovery and resource transformation. Our technology platform is designed to maximize biological performance, optimize operational efficiency, and generate measurable environmental impact.',
    rearingBadge: 'Automated Rearing Environment',
    rearingTitle: 'Enhancing Biological\nPerformance',
    rearingParagraph1:
      'At the core of our operations is a technology-enabled bio-manufacturing platform built to optimise every stage of the Black Soldier Fly lifecycle. Through automated rearing environments, precision climate management, and continuous monitoring, we create ideal conditions for biological growth and resource conversion.',
    rearingParagraph2:
      'Our system leverages sensors, data analytics, AI and process automation to monitor critical production parameters in real time, enabling greater consistency, improved yields, and enhanced operational efficiency.',
    rearingCapabilities: [
      'Automated rearing and climate-controlled production environments',
      'Real-time monitoring of biological and environmental conditions',
      'Data-driven process optimization and performance management',
      'Scalable infrastructure for circular bio-manufacturing',
    ],
    dashboardBadge: 'Digital Sustainability Dashboard',
    dashboardTitle: 'End-to-End\nTraceability',
    dashboardParagraph1:
      'Our Digital Sustainability Dashboard provides complete visibility across the waste-to-value lifecycle. From waste collection and resource recovery to product output and environmental impact, every stage is monitored, measured, and recorded.',
    dashboardParagraph2:
      'This creates a transparent chain of custody that allows partners to track the journey of organic waste as it is transformed into valuable agricultural and industrial inputs.',
    dashboardFeatures: [
      'Waste diversion tracking',
      'Resource recovery monitoring',
      'Product traceability and reporting',
      'Sustainability performance analytics',
      'Audit-ready environmental records',
    ],
    esgBadge: 'Real-Time ESG Intelligence',
    esgTitle: 'Measuring What\nMatters',
    esgParagraph1:
      'Sustainability should be measurable. Our SaaS-enabled environmental intelligence platform provides partners with real-time access to key sustainability metrics, helping them quantify and communicate their environmental impact.',
    esgParagraph2:
      'By converting operational data into actionable insights, organizations can strengthen ESG reporting, support compliance requirements, and demonstrate progress toward sustainability goals with confidence.',
    esgCapabilities: [
      'Carbon-emission avoidance',
      'Methane avoidance from waste diversion',
      'Waste recovered and upcycled',
      'Circularity and resource-efficiency indicators',
      'Environmental impact reporting',
      'Contributions to SDGs',
    ],
    partnerBadge: 'Partner Dashboard Access',
    partnerTitle: 'Secure Access to\nSustainability\nInsights',
    partnerParagraph1:
      'Our secure partner portal provides authorised users with access to real-time operational and sustainability data through an intuitive digital interface.',
    partnerParagraph2:
      'Whether tracking waste volumes, monitoring environmental impact, or generating sustainability reports, partners have the tools needed to access transparent, verifiable, and actionable insights whenever they need them.',
    partnerDemoText: 'Request A Demo',
    partnerDemoLink: '/contact',
    partnerSubtitle: 'Monitor. Measure. Report. Improve.',
    partnerLoginText: 'Partner Login',
    partnerLoginLink: '/contact',
  },

  {
    _id: 'contactInfo',
    _type: 'contactInfo',
    heroBadge: 'Contact Us',
    heroHeadline: "Let's Build a Circular Future Together",
    heroSubheadline1:
      "Whether you're looking to manage organic waste, source sustainable products, explore partnership opportunities, or learn more about our technology platform, we'd love to hear from you.",
    heroSubheadline2:
      'Our team is ready to help you discover how Grub Bio can support your sustainability, circular economy, and climate objectives.',
    formBadge: 'Contact Form',
    formTitle: 'Send Us a Message',
    formDescription:
      'Have a question or project in mind? Complete the form below and a member of our team will get back to you as soon as possible.',
    email: 'info@grub.bio',
    phone: '+234 (0) 800 000 0000',
    address: 'Lagos, Nigeria & Regional Bio-Refining Hubs Across Africa',
    workingHours: 'Monday – Friday, 8:00 AM – 6:00 PM (WAT)',
    linkedinUrl: 'https://www.linkedin.com/company/grub-bio',
    twitterUrl: 'https://x.com/grub_bio',
    instagramUrl: 'https://www.instagram.com/grub.bio/',
    facebookUrl: 'https://www.facebook.com/share/1BbmfRzVxY/',
    helpTitle: 'How Can We Help?',
    helpCards: [
      {
        _key: 'help-1',
        title: 'General Inquiries',
        description:
          'Learn more about Grub Bio, our products, services, technology platform, and sustainability initiatives.',
      },
      {
        _key: 'help-2',
        title: 'Partnership Requests',
        description:
          'Explore opportunities for collaboration, including waste supply partnerships, product offtake agreements, municipal waste management programs, ESG initiatives, and circular supply chain development.',
      },
      {
        _key: 'help-3',
        title: 'Product & Commercial Enquiries',
        description:
          'Speak with our team about sustainable protein ingredients, organic fertilisers, functional oils, and other bio-based products.',
      },
      {
        _key: 'help-4',
        title: 'Sustainability & ESG Solutions',
        description:
          'Learn how our Digital Sustainability Platform can help your organization track environmental impact, carbon-emission avoidance, and ESG performance metrics.',
      },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        _key: 'cfaq-1',
        question: 'What does Grub Bio do?',
        answer:
          'Grub Bio transforms organic waste into sustainable protein ingredients, organic fertilisers, functional oils, and other bio-based products through advanced bio-manufacturing technologies.',
      },
      {
        _key: 'cfaq-2',
        question: 'What types of organic waste do you work with?',
        answer:
          'We process a wide range of organic waste streams, including agricultural by-products, food processing waste, municipal organic waste, and retail food waste. Contact us to discuss your specific waste streams.',
      },
      {
        _key: 'cfaq-3',
        question: 'Who can partner with Grub Bio?',
        answer:
          'We partner with waste generators, agricultural producers, feed manufacturers, municipal bodies, and organizations seeking sustainable waste management and bio-based products.',
      },
      {
        _key: 'cfaq-4',
        question: 'Can Grub Bio help with ESG reporting?',
        answer:
          'Yes, our Digital Sustainability Platform provides transparent, verifiable data on your environmental impact, helping you track carbon-emission avoidance and other key ESG performance metrics.',
      },
      {
        _key: 'cfaq-5',
        question: 'Do you offer waste management services?',
        answer:
          'Yes, we provide end-to-end organic waste management solutions, diverting waste from landfills and transforming it into valuable resources.',
      },
      {
        _key: 'cfaq-6',
        question: 'How can I become a partner?',
        answer:
          'Simply fill out the contact form above with your inquiry type set to Partnership, or reach out to us directly via email. Our team will get back to you promptly to discuss collaboration opportunities.',
      },
    ],
  },

  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'Grub Bio',
    tagline: 'Advancing Africa’s transition to a bio-circular economy',
    announcementBanner: '',
    newsletterHeading: 'Stay connected with\nGrub Bio',
    newsletterSubtext:
      "Receive updates on bio-circular innovation, sustainable agriculture, climate impact, industry insights, and Grub Bio's latest developments.",
    newsletterCommunityText:
      'Join our community building a more resilient and sustainable future for Africa',
    footerText: 'Get the latest news and updates from Grub Bio.',
    newsletterPrivacyNote:
      'By subscribing you agree to our Privacy Policy and consent to receive updates from Grub Bio.',
    copyrightText: '© 2026 Grub Bio. All rights reserved.',
    privacyPolicyUrl: '#',
    termsUrl: '#',
    cookiesUrl: '#',
    facebookUrl: 'https://www.facebook.com/share/1BbmfRzVxY/',
    instagramUrl: 'https://www.instagram.com/grub.bio/',
    twitterUrl: 'https://x.com/grub_bio',
    linkedinUrl: 'https://www.linkedin.com/company/grub-bio',
    youtubeUrl: '#',
  },

  // --- Initial Product Catalog Documents ---
  {
    _id: 'product-protein',
    _type: 'product',
    title: 'Insect Protein Meal',
    slug: { _type: 'slug', current: 'protein' },
    category: 'Protein',
    shortDescription:
      'Sustainable, nutrient-rich Full-Fat and Defatted Black Soldier Fly Larvae Meal for aquaculture, poultry, and livestock feed.',
    features: [
      'High-quality protein with balanced amino acid profile',
      'Available in Full-Fat and Defatted formulations',
      'Reduces reliance on imported fishmeal and soy',
    ],
    isFeatured: true,
  },
  {
    _id: 'product-fertiliser',
    _type: 'product',
    title: 'Organic Fertiliser',
    slug: { _type: 'slug', current: 'fertiliser' },
    category: 'Fertiliser',
    shortDescription:
      'Bio-augmented fertiliser supporting regenerative agriculture.',
    features: [
      'Rich in organic matter and essential plant nutrients',
      'Improves soil structure and microbial biodiversity',
      '100% natural soil conditioner',
    ],
    isFeatured: true,
  },
  {
    _id: 'product-oils',
    _type: 'product',
    title: 'Functional Oils',
    slug: { _type: 'slug', current: 'lipids' },
    category: 'Oils',
    shortDescription:
      'BSF-derived oils for animal nutrition, feed formulation, and industrial applications.',
    features: [
      'Energy-dense fatty acids with high lauric acid content',
      'Supports gut health and metabolic efficiency',
      'Renewable lipid source for feed and industry',
    ],
    isFeatured: true,
  },

  // --- Initial Services Collection Documents ---
  {
    _id: 'service-upcycling',
    _type: 'service',
    title: 'Organic Waste Upcycling',
    slug: { _type: 'slug', current: 'organic-waste-upcycling' },
    tagline: 'Zero-landfill bioconversion for industrial and agricultural waste',
    description:
      'Converting agricultural, food processing, and market waste into valuable resources.',
    iconName: 'Recycle',
    order: 1,
  },
  {
    _id: 'service-esg',
    _type: 'service',
    title: 'ESG & Sustainability Reporting',
    slug: { _type: 'slug', current: 'esg-sustainability-reporting' },
    tagline: 'Audit-ready environmental impact telemetry',
    description:
      'Providing traceable sustainability data and environmental impact reporting for partners.',
    iconName: 'ShieldCheck',
    order: 2,
  },
  {
    _id: 'service-agriculture',
    _type: 'service',
    title: 'Climate Smart and Sustainable Agriculture',
    slug: { _type: 'slug', current: 'climate-smart-agriculture' },
    tagline: 'Resilient feed proteins and regenerative soil inputs',
    description:
      'Creating a circular system that simultaneously optimizes food production, reduces environmental degradation, and builds climate resilience.',
    iconName: 'Leaf',
    order: 3,
  },
  {
    _id: 'service-partnerships',
    _type: 'service',
    title: 'Circular Economy Partnerships',
    slug: { _type: 'slug', current: 'circular-economy-partnerships' },
    tagline: 'Tailored bio-refinery collaboration across value chains',
    description:
      'Developing tailored solutions for businesses, municipalities, and agricultural stakeholders.',
    iconName: 'Cpu',
    order: 4,
  },

  // --- Initial Impact Metrics ---
  {
    _id: 'metric-co2e',
    _type: 'metric',
    value: '0.5',
    suffix: 'T',
    label: 'CO2e per metric tonne on Organic Waste diverted from land fills',
    order: 1,
  },
  {
    _id: 'metric-water',
    _type: 'metric',
    value: '90',
    suffix: '%',
    label: 'Less Water Required Compared to Traditional Protein Source',
    order: 2,
  },
  {
    _id: 'metric-land',
    _type: 'metric',
    value: '1,000',
    suffix: 'x',
    label: 'Less Land Requirement Than Conventional Soy-Based Protein Production',
    order: 3,
  },
  {
    _id: 'metric-waste',
    _type: 'metric',
    value: '0',
    suffix: '%',
    label: 'Quantity of organic waste left after upcycling',
    order: 4,
  },
]

async function run() {
  console.log(
    `Seeding ${documents.length} documents to Sanity (${projectId}/${dataset}) in ${
      forceOverwrite ? 'createOrReplace (--force)' : 'createIfNotExists'
    } mode...`,
  )

  for (const doc of documents) {
    if (forceOverwrite) {
      await client.createOrReplace(doc)
    } else {
      await client.createIfNotExists(doc)
    }
    console.log(`✓ ${doc._type}: ${doc._id}`)
  }

  console.log('\nDone! Open /studio in your app to edit every section.')
}

run().catch((err) => {
  console.error('Sanity seed failed:', err)
  process.exit(1)
})

