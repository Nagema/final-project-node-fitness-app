const mongoose = require("mongoose");
const connectDb = require("../db");
const Exercise = require("../../api/workouts/exercises/exercises.model");

const exercises = [
  {
    name: 'Elíptica',
    description: '15 minutos',
    rest: '0',
    img: 'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/43/an01620_im04022_fsm7_elliptical_machinethu_jpg.jpg'
  },
  {
    name: 'Carrera en cinta',
    description: '10 minutos',
    rest: '0',
    img: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/27667/man-on-treadmill-clipart-xl.png'
  },
  {
    name: 'Marcha en cinta A',
    description: '20 minutos',
    rest: '0',
    img: 'https://cdn.mos.cms.futurecdn.net/aRumCGdrLKY4MU6AyaJ8rV-1200-80.jpg'
  },
  {
    name: 'Marcha en cinta B',
    description: '40 minutos',
    rest: '0',
    img: 'https://cdn.mos.cms.futurecdn.net/aRumCGdrLKY4MU6AyaJ8rV-1200-80.jpg'
  },
  {
    name: "Dominadas A",
    description: "3 x 10",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_600x600.png?v=1619977612",
  },
  {
    name: "Dominadas B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_600x600.png?v=1619977612",
  },
  {
    name: "Dominadas C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_600x600.png?v=1619977612",
  },
  {
    name: "Jalón al pecho A",
    description: "3 x 10",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105",
  },
  {
    name: "Jalón al pecho B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105",
  },
  {
    name: "Jalón al pecho C",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105",
  },
  {
    name: "Remo máquina A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127",
  },
  {
    name: "Remo máquina B",
    description: "4 x 12, 10, 10, 8",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127",
  },
  {
    name: "Remo máquina C",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127",
  },
  {
    name: "Remo mancuerna A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Row-_Single-Arm_49867db3-f465-4fbc-b359-29cbdda502e2_600x600.png?v=1612138069",
  },
  {
    name: "Remo mancuerna B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Row-_Single-Arm_49867db3-f465-4fbc-b359-29cbdda502e2_600x600.png?v=1612138069",
  },
  {
    name: "Remo mancuerna C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Row-_Single-Arm_49867db3-f465-4fbc-b359-29cbdda502e2_600x600.png?v=1612138069",
  },
  {
    name: "Press banca plano A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bench-Press_0316b783-43b2-44f8-8a2b-b177a2cfcbfc_600x600.png?v=1612137800",
  },
  {
    name: "Press banca plano B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",

    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bench-Press_0316b783-43b2-44f8-8a2b-b177a2cfcbfc_600x600.png?v=1612137800",
  },
  {
    name: "Press banca plano C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bench-Press_0316b783-43b2-44f8-8a2b-b177a2cfcbfc_600x600.png?v=1612137800",
  },
  {
    name: "Press banca inclinado A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Barbell-Bench-Press_dc0c6279-d038-44f5-a682-54c2a5e2602c_600x600.png?v=1612137944"
  },
  {
    name: "Press banca inclinado B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Barbell-Bench-Press_dc0c6279-d038-44f5-a682-54c2a5e2602c_600x600.png?v=1612137944"
  },
  {
    name: "Press banca inclinado C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Barbell-Bench-Press_dc0c6279-d038-44f5-a682-54c2a5e2602c_600x600.png?v=1612137944"
  },
  {
    name: "Press mancuerna A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bench-Press_13090f67-ccfc-4f3a-9bab-e75d753fa9fa_600x600.png?v=1612137970"
  },
  {
    name: "Press mancuerna B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bench-Press_13090f67-ccfc-4f3a-9bab-e75d753fa9fa_600x600.png?v=1612137970"
  },
  {
    name: "Press mancuerna C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bench-Press_13090f67-ccfc-4f3a-9bab-e75d753fa9fa_600x600.png?v=1612137970"
  },
  {
    name: "Flexiones A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Push-Ups_600x600.png?v=1640121436"
  },
  {
    name: "Flexiones B",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Push-Ups_600x600.png?v=1640121436"
  },
  {
    name: "Cruce de poleas A",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-Crossover_09c90616-2777-47ed-927e-d5987edfce09_600x600.png?v=1612138036"
  },
  {
    name: "Cruce de poleas B",
    description: "3 x 15",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-Crossover_09c90616-2777-47ed-927e-d5987edfce09_600x600.png?v=1612138036"
  },
  {
    name: "Shoulder press A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Shoulder-Press_da0aa742-620a-45f7-9277-78137d38ff28_600x600.png?v=1612138495"
  },
  {
    name: "Shoulder press B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Shoulder-Press_da0aa742-620a-45f7-9277-78137d38ff28_600x600.png?v=1612138495"
  },
  {
    name: "Elevación lateral hombros A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Lateral-Raise_31c81eee-81c4-4ffe-890d-ee13dd5bbf20_600x600.png?v=1612138523"
  },
  {
    name: "Elevación lateral hombros B",
    description: "4 x 12, 10, 10 , 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Lateral-Raise_31c81eee-81c4-4ffe-890d-ee13dd5bbf20_600x600.png?v=1612138523"
  },
  {
    name: "Elevación lateral hombros C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Lateral-Raise_31c81eee-81c4-4ffe-890d-ee13dd5bbf20_600x600.png?v=1612138523"
  },
  {
    name: "Elevación frontal hombros A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Front-Raise_11804c3c-22d1-4589-a035-e30ad72149f3_600x600.png?v=1612138576"
  },
  {
    name: "Elevación frontal hombros B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Front-Raise_11804c3c-22d1-4589-a035-e30ad72149f3_600x600.png?v=1612138576"
  },
  {
    name: "Elevación frontal hombros C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Front-Raise_11804c3c-22d1-4589-a035-e30ad72149f3_600x600.png?v=1612138576"
  },
  {
    name: "Triceps polea A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Triceps-Pressdown_e759437b-6200-4b44-b484-14db770024a4_600x600.png?v=1612136845"
  },
  {
    name: "Triceps polea B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Triceps-Pressdown_e759437b-6200-4b44-b484-14db770024a4_600x600.png?v=1612136845"
  },
  {
    name: "Triceps polea C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Triceps-Pressdown_e759437b-6200-4b44-b484-14db770024a4_600x600.png?v=1612136845"
  },
  {
    name: "Fondo Triceps A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bench-Dips_600x600.png?v=1619977992"
  },
  {
    name: "Fondo Triceps B",
    description: "4 x 12, 10, 10 , 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bench-Dips_600x600.png?v=1619977992"
  },
  {
    name: "Fondo Triceps C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bench-Dips_600x600.png?v=1619977992"
  },
  {
    name: "Flexiones Triceps A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Push-Ups_600x600.png?v=1640121436"
  },
  {
    name: "Flexiones Triceps B",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Push-Ups_600x600.png?v=1640121436"
  },
  {
    name: "Curl polea biceps A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Cable-Curl_6216e254-5f77-462c-9954-ea210fff8a70_600x600.png?v=1612137195"
  },
  {
    name: "Curl polea biceps B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Cable-Curl_6216e254-5f77-462c-9954-ea210fff8a70_600x600.png?v=1612137195"
  },
  {
    name: "Curl polea biceps C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Cable-Curl_6216e254-5f77-462c-9954-ea210fff8a70_600x600.png?v=1612137195"
  },
  {
    name: "Curl biceps concentrado A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Concentration-Curl_289b5739-4bdd-40e6-a195-6ecfcc685126_600x600.png?v=1612137334"
  },
  {
    name: "Curl biceps concentrado B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Concentration-Curl_289b5739-4bdd-40e6-a195-6ecfcc685126_600x600.png?v=1612137334"
  },
  {
    name: "Curl biceps concentrado C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Concentration-Curl_289b5739-4bdd-40e6-a195-6ecfcc685126_600x600.png?v=1612137334"
  },
  {
    name: "Curl biceps alterno A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Alternating-Dumbbell-Curl_ad879dc4-b4fb-4ca7-b2b1-6e1eb5d78252_600x600.png?v=1612137169"
  },
  {
    name: "Curl biceps alterno B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Alternating-Dumbbell-Curl_ad879dc4-b4fb-4ca7-b2b1-6e1eb5d78252_600x600.png?v=1612137169"
  },
  {
    name: "Curl biceps alterno C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Alternating-Dumbbell-Curl_ad879dc4-b4fb-4ca7-b2b1-6e1eb5d78252_600x600.png?v=1612137169"
  },
  {
    name: "Curl barra Z A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/EZ-Barbell-Curl_42cb566b-6415-4318-94e0-c93f4b442e59_600x600.png?v=1612137227"
  },
  {
    name: "Curl barra Z B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/EZ-Barbell-Curl_42cb566b-6415-4318-94e0-c93f4b442e59_600x600.png?v=1612137227"
  },
  {
    name: "Curl barra Z C",
    description: "4 x 12",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/EZ-Barbell-Curl_42cb566b-6415-4318-94e0-c93f4b442e59_600x600.png?v=1612137227"
  },
  {
    name: "Plancha abdominal",
    description: "4 x 30 segundos",
    rest: "30 segundos",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Plank_3a82d566-9cb2-4c20-b301-bc8bd635c4d1_600x600.png?v=1612138431"
  },
  {
    name: "Oblicuos A",
    description: "2 x 20",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Oblique-Crunch_253d0361-395d-443b-8228-aff440c1eee9_600x600.png?v=1612138354"
  },
  {
    name: "Oblicuos B",
    description: "4 x 20",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Oblique-Crunch_253d0361-395d-443b-8228-aff440c1eee9_600x600.png?v=1612138354"
  },
  {
    name: "Crunch abdominal A",
    description: "2 x 20",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Crunch_f3498d5d-82d9-4a7f-8dee-98a2e55a62f2_600x600.png?v=1612138317"
  },
  {
    name: "Crunch abdominal B",
    description: "4 x 20",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Crunch_f3498d5d-82d9-4a7f-8dee-98a2e55a62f2_600x600.png?v=1612138317"
  },
  {
    name: "Elevación de piernas A",
    description: "2 x 20",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hanging-Leg-Raise_36986393-d0a6-494a-981f-4ea06a99b0b5_600x600.png?v=1612138457"
  },
  {
    name: "Elevación de piernas B",
    description: "4 x 20",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hanging-Leg-Raise_36986393-d0a6-494a-981f-4ea06a99b0b5_600x600.png?v=1612138457"
  },
  {
    name: "Elevación de rodillas A",
    description: "2 x 20",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bent-Knee-Reverse-Crunch_600x600.png?v=1621163012"
  },
  {
    name: "Elevación de rodillas B",
    description: "4 x 20",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bent-Knee-Reverse-Crunch_600x600.png?v=1621163012"
  },
  {
    name: "Sentadilla A",
    description: "3 x 15",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bodyweight-Squat_600x600.png?v=1653577860"
  },
  {
    name: "Sentadilla B",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bodyweight-Squat_600x600.png?v=1653577860"
  },
  {
    name: "Sentadilla con peso A",
    description: "3 x 10",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Squat_d752e42d-02ba-4692-b300-c6e67ad5a4f5_600x600.png?v=1612138811"
  },
  {
    name: "Sentadilla con peso B",
    description: "4 x 12, 10, 10, 8",
    rest: "2 minutoS",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Squat_d752e42d-02ba-4692-b300-c6e67ad5a4f5_600x600.png?v=1612138811"
  },
  {
    name: "Sentadilla con peso C",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Squat_d752e42d-02ba-4692-b300-c6e67ad5a4f5_600x600.png?v=1612138811"
  },
  {
    name: "Elevación de cadera A",
    description: "3 x 15",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Hip-Thrust_600x600.png?v=1656402338"
  },
  {
    name: "Elevación de cadera B",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Hip-Thrust_600x600.png?v=1656402338"
  },
  {
    name: "Abducción de cadera A",
    description: "3 x 15",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Hip-Abduction-Machine_600x600.png?v=1656405168"
  },
  {
    name: "Abducción de cadera B",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Hip-Abduction-Machine_600x600.png?v=1656405168"
  },
  {
    name: "Abducción de gluteo A",
    description: "3 x 15",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Hip-Abduction-Machine_600x600.png?v=1656405168"
  },
  {
    name: "Abducción de gluteo B",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Hip-Abduction-Machine_600x600.png?v=1656405168"
  },
  {
    name: "Prensa de piernas A",
    description: "3 x 15",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Press_f7febd5c-75e5-42f4-9bb4-c938969ce293_600x600.png?v=1612138836"
  },
  {
    name: "Prensa de piernas B",
    description: "4 x 12, 10, 10, 8",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Press_f7febd5c-75e5-42f4-9bb4-c938969ce293_600x600.png?v=1612138836"
  },
  {
    name: "Prensa de piernas C",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Press_f7febd5c-75e5-42f4-9bb4-c938969ce293_600x600.png?v=1612138836"
  },
  {
    name: "Extensión de cuadriceps A",
    description: "3 x 15",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Extension_41d91d3f-4b9c-4374-82e2-1d697ce35fe4_600x600.png?v=1612138862"
  },
  {
    name: "Extensión de cuadriceps B",
    description: "4 x 12, 10, 10, 8",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Extension_41d91d3f-4b9c-4374-82e2-1d697ce35fe4_600x600.png?v=1612138862"
  },
  {
    name: "Extensión de cuadriceps C",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Extension_41d91d3f-4b9c-4374-82e2-1d697ce35fe4_600x600.png?v=1612138862"
  },
  {
    name: "Femorales A",
    description: "3 x 15",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Leg-Curl_203153d8-79dd-4bb9-9125-708aa4327107_600x600.png?v=1612139013"
  },
  {
    name: "Femorales B",
    description: "4 x 12, 10, 10, 8",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Leg-Curl_203153d8-79dd-4bb9-9125-708aa4327107_600x600.png?v=1612139013"
  },
  {
    name: "Femorales C",
    description: "4 x 12",
    rest: "1 minuto",
    img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Leg-Curl_203153d8-79dd-4bb9-9125-708aa4327107_600x600.png?v=1612139013"
  },
];

const exercisesDocuments = exercises.map((exercise) => new Exercise(exercise));

connectDb()
  .then(async () => {
    await Exercise.collection.drop();
    console.log("SEED :collection exercices deleted correctly");
  })
  .catch((error) => console.log("Could not delete" + error))
  .then(async () => {
    await Exercise.insertMany(exercisesDocuments);
    console.log("Exercises added correctly");
  })
  .catch((error) => console.log("Could not add data" + error))
  .finally(() => mongoose.disconnect());
