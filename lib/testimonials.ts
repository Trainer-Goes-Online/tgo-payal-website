/* Everything on /testimonials, pulled from the client-testimonials page of
   payalkothari.com (Wix) on 2026-11-18, in that page's order. Photos and video
   posters are self-hosted in /public/images/testimonials. The videos still
   stream from Wix's video CDN: if the old Wix site is ever closed, download
   these MP4s and self-host them, or every video tile breaks. */

export type Photo = { src: string; w: number; h: number };
export type VideoTestimonial = { poster: string; w: number; h: number; src: string };

export const VIDEOS: VideoTestimonial[] = [
  { poster: '/images/testimonials/video-01.webp', w: 720, h: 405, src: 'https://video.wixstatic.com/video/0230cf_54b012bebb0e44c2b8573764af6ab6db/1080p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-02.webp', w: 720, h: 1280, src: 'https://video.wixstatic.com/video/0230cf_15b2202807f3423790bae09d3157fbe5/1080p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-03.webp', w: 720, h: 1280, src: 'https://video.wixstatic.com/video/0230cf_f42b25cf5d2e4103828d9206235468e7/720p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-04.webp', w: 720, h: 1280, src: 'https://video.wixstatic.com/video/0230cf_8941e3ac1abc43318f2be871150f6828/1080p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-05.webp', w: 720, h: 407, src: 'https://video.wixstatic.com/video/0230cf_55b3703991c44cdd9f190934835d1d5c/480p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-06.webp', w: 720, h: 405, src: 'https://video.wixstatic.com/video/0230cf_479bacb28b0c434985bcd1494cfa4ada/720p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-07.webp', w: 352, h: 640, src: 'https://video.wixstatic.com/video/0230cf_6647ad90b6b748b6ac34db59200f880b/360p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-08.webp', w: 352, h: 640, src: 'https://video.wixstatic.com/video/0230cf_73df330a62804f418a98131d118058e5/360p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-09.webp', w: 720, h: 405, src: 'https://video.wixstatic.com/video/0230cf_f9dc86c707ff490fa59c3f032c7454cd/720p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-10.webp', w: 478, h: 850, src: 'https://video.wixstatic.com/video/0230cf_f9916431451a44afadce5bc199440f28/480p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-11.webp', w: 720, h: 405, src: 'https://video.wixstatic.com/video/0230cf_68618923789846e9bc705c9aebc764cd/720p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-12.webp', w: 720, h: 405, src: 'https://video.wixstatic.com/video/0230cf_a060fed8accc4e27a24d2cdd29d2365d/1080p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-13.webp', w: 720, h: 1280, src: 'https://video.wixstatic.com/video/0230cf_152470c8952b457c87136db0d4062fac/1080p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-14.webp', w: 720, h: 405, src: 'https://video.wixstatic.com/video/0230cf_008a96a240d342faa90700a0497aeb13/720p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-15.webp', w: 352, h: 640, src: 'https://video.wixstatic.com/video/0230cf_2b8fe042f2114710a52069350e0ab059/360p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-16.webp', w: 352, h: 640, src: 'https://video.wixstatic.com/video/0230cf_1918dd6801db4e778c551482ea58eb40/360p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-17.webp', w: 640, h: 360, src: 'https://video.wixstatic.com/video/0230cf_b6d250918f0a4276ae1d433499dca1ee/360p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-18.webp', w: 720, h: 1280, src: 'https://video.wixstatic.com/video/0230cf_214a6c67178e4c2ba5875cf7a77ff22c/1080p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-19.webp', w: 480, h: 848, src: 'https://video.wixstatic.com/video/0230cf_e34166b2416d4320be2e322176c24cf8/480p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-20.webp', w: 640, h: 640, src: 'https://video.wixstatic.com/video/0230cf_1e15cae1073345cbb91adbd2462b222e/480p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-21.webp', w: 480, h: 848, src: 'https://video.wixstatic.com/video/0230cf_860cad7a0d04471bb1a8496c6a820e21/480p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-22.webp', w: 480, h: 848, src: 'https://video.wixstatic.com/video/0230cf_5bf8545b7bb14454a0371c540d34f4f8/480p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-23.webp', w: 720, h: 1280, src: 'https://video.wixstatic.com/video/0230cf_6f721a9eff2e4962af737e267a5ff2dd/720p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-24.webp', w: 480, h: 848, src: 'https://video.wixstatic.com/video/0230cf_9051d2d2508b450f8143dc878738a18c/480p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-25.webp', w: 720, h: 407, src: 'https://video.wixstatic.com/video/0230cf_e8793ebbf9604610ada0f878a427eee6/480p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-26.webp', w: 720, h: 405, src: 'https://video.wixstatic.com/video/0230cf_e9ce96268d974d219d98660f727c13c0/720p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-27.webp', w: 352, h: 640, src: 'https://video.wixstatic.com/video/0230cf_beb9694fff0c4daab2163535f31f8210/360p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-28.webp', w: 480, h: 864, src: 'https://video.wixstatic.com/video/0230cf_7511e5ae1c21411e8374a9cd3c9bdba8/480p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-29.webp', w: 720, h: 1280, src: 'https://video.wixstatic.com/video/0230cf_2af6cc1799474aba8f9ff3478949628a/720p/mp4/file.mp4' },
  { poster: '/images/testimonials/video-30.webp', w: 480, h: 848, src: 'https://video.wixstatic.com/video/0230cf_b1d9896745ce489395f93d14924bd9b8/480p/mp4/file.mp4' },
];

export const RESULT_PHOTOS: Photo[] = [
  { src: '/images/testimonials/result-01.webp', w: 1200, h: 1200 },
  { src: '/images/testimonials/result-02.webp', w: 739, h: 1600 },
  { src: '/images/testimonials/result-03.webp', w: 600, h: 1299 },
  { src: '/images/testimonials/result-04.webp', w: 1200, h: 1200 },
  { src: '/images/testimonials/result-05.webp', w: 1200, h: 1200 },
  { src: '/images/testimonials/result-06.webp', w: 1200, h: 1200 },
  { src: '/images/testimonials/result-07.webp', w: 1024, h: 1024 },
  { src: '/images/testimonials/result-08.webp', w: 1200, h: 1200 },
  { src: '/images/testimonials/result-09.webp', w: 654, h: 750 },
  { src: '/images/testimonials/result-10.webp', w: 862, h: 1084 },
  { src: '/images/testimonials/result-11.webp', w: 1170, h: 1170 },
  { src: '/images/testimonials/result-12.webp', w: 1200, h: 1200 },
  { src: '/images/testimonials/result-13.webp', w: 908, h: 926 },
  { src: '/images/testimonials/result-14.webp', w: 1080, h: 1080 },
  { src: '/images/testimonials/result-15.webp', w: 1200, h: 1200 },
];

export const MOMENTS: Photo[] = [
  { src: '/images/testimonials/moment-01.webp', w: 1200, h: 800 },
  { src: '/images/testimonials/moment-02.webp', w: 1200, h: 1600 },
  { src: '/images/testimonials/moment-03.webp', w: 900, h: 1600 },
  { src: '/images/testimonials/moment-04.webp', w: 1200, h: 1600 },
  { src: '/images/testimonials/moment-05.webp', w: 1200, h: 1200 },
  { src: '/images/testimonials/moment-06.webp', w: 900, h: 1600 },
  { src: '/images/testimonials/moment-07.webp', w: 1200, h: 799 },
  { src: '/images/testimonials/moment-08.webp', w: 1200, h: 799 },
  { src: '/images/testimonials/moment-09.webp', w: 1200, h: 675 },
  { src: '/images/testimonials/moment-10.webp', w: 1200, h: 675 },
  { src: '/images/testimonials/moment-11.webp', w: 1200, h: 1600 },
  { src: '/images/testimonials/moment-12.webp', w: 1200, h: 799 },
  { src: '/images/testimonials/moment-13.webp', w: 768, h: 1024 },
  { src: '/images/testimonials/moment-14.webp', w: 853, h: 1280 },
  { src: '/images/testimonials/moment-15.webp', w: 1200, h: 539 },
  { src: '/images/testimonials/moment-16.webp', w: 1200, h: 675 },
  { src: '/images/testimonials/moment-17.webp', w: 1200, h: 900 },
  { src: '/images/testimonials/moment-18.webp', w: 1200, h: 675 },
  { src: '/images/testimonials/moment-19.webp', w: 780, h: 1040 },
  { src: '/images/testimonials/moment-20.webp', w: 900, h: 1600 },
  { src: '/images/testimonials/moment-21.webp', w: 960, h: 1280 },
  { src: '/images/testimonials/moment-22.webp', w: 900, h: 1600 },
  { src: '/images/testimonials/moment-23.webp', w: 900, h: 1600 },
  { src: '/images/testimonials/moment-24.webp', w: 900, h: 1600 },
  { src: '/images/testimonials/moment-25.webp', w: 900, h: 1600 },
  { src: '/images/testimonials/moment-26.webp', w: 899, h: 1599 },
  { src: '/images/testimonials/moment-27.webp', w: 768, h: 1024 },
  { src: '/images/testimonials/moment-28.webp', w: 774, h: 1032 },
  { src: '/images/testimonials/moment-29.webp', w: 1200, h: 900 },
  { src: '/images/testimonials/moment-30.webp', w: 1200, h: 900 },
  { src: '/images/testimonials/moment-31.webp', w: 1040, h: 780 },
  { src: '/images/testimonials/moment-32.webp', w: 900, h: 1600 },
  { src: '/images/testimonials/moment-33.webp', w: 1200, h: 1200 },
  { src: '/images/testimonials/moment-34.webp', w: 1200, h: 675 },
  { src: '/images/testimonials/moment-35.webp', w: 852, h: 1280 },
  { src: '/images/testimonials/moment-36.webp', w: 750, h: 430 },
  { src: '/images/testimonials/moment-37.webp', w: 1200, h: 675 },
  { src: '/images/testimonials/moment-38.webp', w: 900, h: 1600 },
  { src: '/images/testimonials/moment-39.webp', w: 1200, h: 900 },
  { src: '/images/testimonials/moment-40.webp', w: 1200, h: 1072 },
  { src: '/images/testimonials/moment-41.webp', w: 1200, h: 675 },
  { src: '/images/testimonials/moment-42.webp', w: 1200, h: 900 },
  { src: '/images/testimonials/moment-43.webp', w: 1200, h: 979 },
  { src: '/images/testimonials/moment-44.webp', w: 768, h: 1024 },
  { src: '/images/testimonials/moment-45.webp', w: 1200, h: 1600 },
  { src: '/images/testimonials/moment-46.webp', w: 900, h: 1600 },
  { src: '/images/testimonials/moment-47.webp', w: 1200, h: 1600 },
  { src: '/images/testimonials/moment-48.webp', w: 1200, h: 900 },
  { src: '/images/testimonials/moment-49.webp', w: 1200, h: 1200 },
];

/* Word for word from "Payal Kothari is a certified clinical gut health
   nutritionist.docx" (TESTIMONIALS), in its order. `who` is the tag line the
   document gives each story; `link` is the press article it cites. */
export type Written = { quote: string; name: string; who?: string; link?: { label: string; href: string } };

export const WRITTEN: Written[] = [
  {
    quote:
      'I was a very proud “foodie”, I did not want to lose weight till my friends and me planned a boy’s trip to Spain, and the cut off weight to skydive on the waiver form was 90kgs and that was my moment of truth! I was 111 kgs then. I started my weight loss journey with Payal Kothari and lost 36 kgs in 5 months, 75 kgs now. I learned a lot about food, metabolism, active muscle mass and gut health. Integrative nutrition is a lifestyle and an adventure. Thank you Payal, for educating me about gut health and mental wellness.',
    name: 'Mihir Darji',
  },
  {
    quote:
      'I am Saloni, a busy and successful wedding planner living in Dubai and I was desperate to lose 10/12 kgs. My friends had lost weight with the keto diet. When I reached out to Payal, she said she would onboard me only if I agreed to an integrative nutrition approach. Eliminating carbohydrate would not be good for my gut and mental wellness. Honestly what I ate was such a yummy balanced healthy meal with low and slow grains, healthy fats, proteins and fibres along with intermittent fasting that I was shocked to have lost 2 kgs in the first week itself after eating so much food. I was going to fall for “herd mentality” and a fad diet that makes you lose all common sense and do nonsense. Along with holistic nutrition, she is also a life coach.',
    name: 'Saloni Shah',
    who: 'Wedding planner',
  },
  {
    quote:
      'My journey with Payal Kothari has been more than just about hair, skin and weight loss. I have been able to find my purpose all the way from my gut through natural plant-based foods, yoga and meditation. I went to her to enhance my hair and skin as I was turning 50. But, in return she helped me visualize and start my own online organization that connects NGO’s to corporates for their CSR activities. It had always been my desire to add value and have a meaning in life. Thank you Payal, not just for weight loss and gut health but also for my new venture which would not have been possible without you.',
    name: 'Komal Singh',
    who: 'New entrepreneur',
  },
  {
    quote:
      'I was not only able to lose weight – 16 kgs in 3 months and get my regular period cycles back, I also got my dream job thanks to Payal’s visualization and NLP techniques. We read labels of every junk food and understood how to eat natural foods and stop sugar and salt cravings. Never would I in my wildest dream think that I would drink wheat grass shots after my run at Shivaji park and coconut water after I got home instead of a sugary soda and chips. How gut health has a huge role to play in my emotional wellness too. She is a holistic and practical coach. Thank you payal. I promise to take you for my photoshoot to Maldives.',
    name: 'Mihika Mungale',
    who: 'Age 27, professional photographer',
    link: { label: 'Mumbai Mirror', href: 'https://mumbaimirror.indiatimes.com/others/health-lifestyle/gut-factor/articleshow/72479985.cms' },
  },
  {
    quote:
      'As a chef, and hectic work schedules, I realized bulk of my sugar – white poison came from many cups of coffee’s and teas that I drank throughout the day. I experienced sugar cravings at night as well, and a lot of anxiety if I did not succumb to those cravings of ice-cream and candy. It was a high and low graph of sugar spike and lows. Apple at night and yogurt, to multiply my beneficial bacteria really introspection and walking helped me get off my sugar cravings. I have to thank Payal, as she really helped me get off sugar and focused a lot on how gut and brain have a direct connection to emotional eating and weight loss. I cannot handle any sugary coffee or beverage anymore.',
    name: 'Harsh Shodhan',
    who: 'Chef',
    link: { label: 'Mumbai Mirror', href: 'https://mumbaimirror.indiatimes.com/others/health-lifestyle/crystal-clear/articleshow/71042335.cms' },
  },
  {
    quote:
      'Payal Kothari, is an intuitive coach and she understands the connection gut and brain. She taught me how to eat healthy and cheat smartly. How to not eat 12 bananas a day as it was overloading my digestive system and that all-natural foods have their share of proteins. I only enjoyed pumping iron, yoga was never my thing, but she convinced me that it would release stress from my gut and help me realign my thoughts and control my emotional eating. I am forever grateful for her guidance and I am now 60 kgs, with lean muscle mass.',
    name: 'Nirav Shah',
    link: { label: 'GQ', href: 'https://www.gqindia.com/content/how-to-lose-weight-like-this-dude-from-mumbai-who-lost-30-kg-in-5-months-by-improving-his-gut-health-weight-loss-inspirations/' },
  },
  {
    quote:
      'I read Payal’s article in Mumbai Mirror about the gut and depression connections and was pleased that I did take her program. Payal worked hand in glove with my psychiatrist and I was able to get off my SSRI’s (medicines) by replenishing my gut bacteria with food and a few natural supplements like flax seed oil, glucosamine, and probiotics. Her approach is natural and was bio-individual and focused on gut and brain healing. Immunity was a big concern, so all herbs were included in the plan. I ate and never went hungry, I could speak to her daily and that access made a huge difference to my emotional eating. I could only sleep for 2 hours each night. Now I am 80kgs and sleep with my circadian rhythm in mind and do eat gluten-free and follow a balanced meal plan. I am 80 percent vegan too. Thank you Payal.',
    name: 'Vikram Lohia',
    who: 'Businessman',
  },
  {
    quote:
      'I am Shivani, I live in Belgium and I started an online transformation gut health program with Payal Kothari. She not only helped me lose weight, but also solved my IBD problem which nobody else could help me with. She showed me how to use food as medicine and resolve my chronic gut problems. She also helped me read labels correctly and make my workouts more effective. My husband along with me lost 7 kgs and is living a healthy plant-based lifestyle. She is always there to guide me, even after completing the sessions. Thank you Payal.',
    name: 'Shivani Sheth',
    who: 'Belgium, Antwerp',
  },
  {
    quote:
      'Payal is the first nutritionist I have met who connects mental wellness to gut health. My work stress was so chronic it gave me irritable bowel syndrome that affected my moods and relationships very negatively. She not only helped me solve my gut, diarrhea and anemia issues, she also helped me let go of a lot resentment and made me drink delicious banana mango smoothies and lots of gut healing superfoods like flax seed powder, potato starch in soups, kanji water and wheat grass shots. My parameters got better, hemoglobin improved, I gained 5 kgs and my energy levels got better, so did my moods. Thanks to Payal, my mood is better, and I am able to tolerate more foods than before.',
    name: 'Mr. Kothari',
    who: '70 years',
  },
  {
    quote:
      'I lost 14 kgs with Payal’s 12-week integrative nutrition program and not just that my period cycle got regular, to a 28-30-day cycle. My sonography reports showed PCOS nonexistent and I am off all hormonal medications, and I am 3 months pregnant and glowing. Thank you Payal, from me and my entire family for a dream that seemed so near yet so far. Thank you for changing my life.',
    name: 'Angelina Kushan',
    who: '28',
  },
  {
    quote:
      'We went to Payal, for my daughter jiya’s sugar addiction and unhealthy eating habits. She would never be hungry for regular meals, but would emotionally bully us into packets of chips, sugary Frapachino’s and waffles. Payal cooked with her and made her try everything from wraps to burrito bowls to khichdi’s. There came a time where she started to eat food at home on the dining table and we would be shocked, of course happy too. She is now 14 and a very conscious teenager and knows how to balance her sugar and workouts. I have to thank Payal, for getting her off sugar and making her try real foods.',
    name: 'Pooja',
    who: 'Mother of Jiya, 12 years',
  },
];
