import React from "react";

const players = [
  {
    name: "MS Dhoni",
    team: "India",
    t20_wc_win_year: 2007,
    role: "Wicket-keeper / Batsman",
    image:
      "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
  },
  {
    name: "Gautam Gambhir",
    team: "India",
    t20_wc_win_year: 2007,
    role: "Batsman",
    image:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_800,q_50/lsci/db/PICTURES/CMS/125400/125433.2.jpg",
  },
  {
    name: "Yuvraj Singh",
    team: "India",
    t20_wc_win_year: 2007,
    role: "All-rounder",
    image:
      "https://media.gettyimages.com/id/90968090/photo/sandton-south-africa-yuvraj-singh-poses-during-the-icc-champions-photocall-session-of-the.jpg?s=612x612&w=0&k=20&c=bUawaKpfQP5cJvaR8SHo_ekSUCKkYdbW1n1cTJqec0w=",
  },
  {
    name: "Rohit Sharma",
    team: "India",
    t20_wc_win_year: "2007, 2024",
    role: "Batsman",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Rohit_Sharma_in_PMO_New_Delhi.jpg/640px-Rohit_Sharma_in_PMO_New_Delhi.jpg",
  },
  {
    name: "Virender Sehwag",
    team: "India",
    t20_wc_win_year: 2007,
    role: "Batsman",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Virender_Sehwag_2.jpg/640px-Virender_Sehwag_2.jpg",
  },
  {
    name: "Robin Uthappa",
    team: "India",
    t20_wc_win_year: 2007,
    role: "Batsman / Wicket-keeper",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Robin_Uthappa_2.jpg/640px-Robin_Uthappa_2.jpg",
  },
  {
    name: "Irfan Pathan",
    team: "India",
    t20_wc_win_year: 2007,
    role: "All-rounder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Irfan_Pathan_at_the_Domestic_Airport.jpg/640px-Irfan_Pathan_at_the_Domestic_Airport.jpg",
  },
  {
    name: "Yusuf Pathan",
    team: "India",
    t20_wc_win_year: 2007,
    role: "All-rounder",
    image: "https://c8.alamy.com/comp/2D35EPH/yusuf-pathan-india-2D35EPH.jpg",
  },
  {
    name: "Harbhajan Singh",
    team: "India",
    t20_wc_win_year: 2007,
    role: "Bowler / Spinner",
    image:
      "https://i.pinimg.com/736x/76/43/7a/76437ad30025cb00d06bd8646c4c4368.jpg",
  },
  {
    name: "Joginder Sharma",
    team: "India",
    t20_wc_win_year: 2007,
    role: "Bowler",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzehj7MHjr_jOsqWo9oy_KUNR1s6O2GDGkXw&s",
  },
  {
    name: "RP Singh",
    team: "India",
    t20_wc_win_year: 2007,
    role: "Bowler",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcye9s2VygiuTw7pKv72JgjcVVu6N1iGFzQ&s",
  },
  {
    name: "Sreesanth",
    team: "India",
    t20_wc_win_year: 2007,
    role: "Bowler",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41EMBXXf1QT6xspEdx3Xt0z-5b6geCC1V4w&s",
  },
  {
    name: "Ajit Agarkar",
    team: "India",
    t20_wc_win_year: 2007,
    role: "Bowler / All-rounder",
    image:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_800,q_50/lsci/db/PICTURES/CMS/79000/79053.3.jpg",
  },
  {
    name: "Piyush Chawla",
    team: "India",
    t20_wc_win_year: 2007,
    role: "Spinner",
    image:
      "https://media.gettyimages.com/id/98742981/photo/gros-islet-saint-lucia-piyush-chawla-of-the-indian-t20-squad-poses-for-a-portrait-on-april-29.jpg?s=612x612&w=gi&k=20&c=7k3GSgZLav4dcP8g-lst2AjIY5_CayBjg7qCLo7euHg=",
  },
  {
    name: "Dinesh Karthik",
    team: "India",
    t20_wc_win_year: 2007,
    role: "Wicket-keeper / Batsman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMfft5ADwbVd0B6hC3iWW0ExZhOc1OEDyhw&s",
  },
  {
    name: "Kamran Akmal",
    team: "Pakistan",
    t20_wc_win_year: 2009,
    role: "Wicket-keeper / Batsman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8v_B62nrJIZ_c1gFCHO30JrQa2S99oSH9g&s",
  },
  {
    name: "Shahid Afridi",
    team: "Pakistan",
    t20_wc_win_year: 2009,
    role: "All-rounder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzo53s4bXM1Xu7EdIAolRzX9e_BIqaj-tDbw&s",
  },
  {
    name: "Shoaib Malik",
    team: "Pakistan",
    t20_wc_win_year: 2009,
    role: "All-rounder",
    image:
      "https://sportstrends.tv/wp-content/uploads/2021/10/1619345315_5eedca6f4abd8.jpg",
  },
  {
    name: "Abdul Razzaq",
    team: "Pakistan",
    t20_wc_win_year: 2009,
    role: "All-rounder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtReSTOG40gRgvPUhQliecvT402Cy6fg49dg&s",
  },
  {
    name: "Younis Khan",
    team: "Pakistan",
    t20_wc_win_year: 2009,
    role: "Batsman",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Younus_Khan_2010.jpg",
  },
  {
    name: "Mohammad Yousuf",
    team: "Pakistan",
    t20_wc_win_year: 2009,
    role: "Batsman",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Mohammad_yousuf.jpg",
  },
  {
    name: "Misbah-ul-Haq",
    team: "Pakistan",
    t20_wc_win_year: 2009,
    role: "Batsman",
    image:
      "https://images.hindustantimes.com/rf/image_size_800x600/HT/p1/2011/11/23/Incoming/Pictures/773229_Wallpaper2.jpg",
  },
  {
    name: "Fawad Alam",
    team: "Pakistan",
    t20_wc_win_year: 2009,
    role: "Batsman",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Fawad_alam.jpg",
  },
  {
    name: "Umar Gul",
    team: "Pakistan",
    t20_wc_win_year: 2009,
    role: "Bowler",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Umer_Gul.jpg/250px-Umer_Gul.jpg",
  },
  {
    name: "Saeed Ajmal",
    team: "Pakistan",
    t20_wc_win_year: 2009,
    role: "Spinner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNezP2VFV7albNyNblp221nQiklNuJ3S0VQ&s",
  },
  {
    name: "Mohammad Amir",
    team: "Pakistan",
    t20_wc_win_year: 2009,
    role: "Bowler",
    image:
      "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTNmMWI2MjIwLWI5ZjUtMTFlZi05OTIxLWJmNzYyZWY2NmVmNS5qcGc=",
  },
  {
    name: "Mohammad Asif",
    team: "Pakistan",
    t20_wc_win_year: 2009,
    role: "Bowler",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/MOHAMMAD_ASIF_%284246253787%29.jpg",
  },
  {
    name: "Kevin Pietersen",
    team: "England",
    t20_wc_win_year: 2010,
    role: "Batsman",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Kevin_Pietersen_2014.jpg",
  },
  {
    name: "Paul Collingwood",
    team: "England",
    t20_wc_win_year: 2010,
    role: "All-rounder",
    image:
      "https://www.thetimes.com/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Ffa818182-b8ff-11e8-b8ec-3485dab5a8cb.jpg?crop=1200%2C1500%2C525%2C0",
  },
  {
    name: "Eoin Morgan",
    team: "England",
    t20_wc_win_year: 2010,
    role: "Batsman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbhNbHRSq5TrUH0HYED3wwoAi5Ljj7SRv1g&s",
  },
  {
    name: "Craig Kieswetter",
    team: "England",
    t20_wc_win_year: 2010,
    role: "Wicket-keeper / Batsman",
    image:
      "https://media.gettyimages.com/id/97446933/photo/chittagong-bangladesh-england-batsman-craig-kieswetter-celebrates-after-reaching-his-maiden-one.jpg?s=612x612&w=gi&k=20&c=JNJm5YCC3xrMImOX1SK2-L2d9FFUxqd96SP91y8xXRk=",
  },
  {
    name: "Luke Wright",
    team: "England",
    t20_wc_win_year: 2010,
    role: "All-rounder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Luke_Wright_in_2008_%28cropped%29.JPG",
  },
  {
    name: "Tim Bresnan",
    team: "England",
    t20_wc_win_year: 2010,
    role: "All-rounder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tim_Bresnan_jogging_to_the_boundary_%28cropped%29.jpg",
  },
  {
    name: "Michael Yardy",
    team: "England",
    t20_wc_win_year: 2010,
    role: "All-rounder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/Michael_Yardy_2010%2C_cropped_%282%29.jpg",
  },
  {
    name: "Graeme Swann",
    team: "England",
    t20_wc_win_year: 2010,
    role: "Spinner",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Graeme_Swann%2C_2009.jpg",
  },
  {
    name: "Stuart Broad",
    team: "England",
    t20_wc_win_year: 2010,
    role: "Bowler / All-rounder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Stuart_Broad.jpg/250px-Stuart_Broad.jpg",
  },
  {
    name: "Ryan Sidebottom",
    team: "England",
    t20_wc_win_year: 2010,
    role: "Bowler",
    image:
      "https://media.gettyimages.com/id/95866263/photo/loughbrough-uk-ryan-sidebottom-of-england-poses-for-the-team-portraits-at-the-ecb-centre-at.jpg?s=612x612&w=gi&k=20&c=FpTuwdW6mMrsztQGw78CBd1_18p5CoOZhazP7xeKYao=",
  },
  {
    name: "Michael Lumb",
    team: "England",
    t20_wc_win_year: 2010,
    role: "Batsman",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Michael_Lumb_cricketer.jpg",
  },
  {
    name: "Iain Henderson",
    team: "England",
    t20_wc_win_year: 2010,
    role: "Batsman",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Iain_Henderson_2017.jpg",
  },
  {
    name: "Chris Gayle",
    team: "West Indies",
    t20_wc_win_year: "2012, 2016",
    role: "Batsman / All-rounder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJq8hWl1Mw0hXmFjCesDlZKa1c1eOQllxsQ&s",
  },
  {
    name: "Dwayne Bravo",
    team: "West Indies",
    t20_wc_win_year: "2012, 2016",
    role: "All-rounder",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzY4MTc5Y2QtODc1OC00YzQ2LWE4NTQtYTU3YmU5MDExYTkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Marlon Samuels",
    team: "West Indies",
    t20_wc_win_year: "2012, 2016",
    role: "Batsman / All-rounder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gCH8N96e4YZeXfIGKwT0fclnPH3-qd68mA&s",
  },
  {
    name: "Kieron Pollard",
    team: "West Indies",
    t20_wc_win_year: 2012,
    role: "All-rounder",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDIyNmY5NmEtMzgwZC00MGRiLWE1ODgtZDQ4NDc4NzUwYjQ0XkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Daren Sammy",
    team: "West Indies",
    t20_wc_win_year: "2012, 2016",
    role: "All-rounder / Captain",
    image:
      "https://caribbeantimes.com/wp-content/uploads/2017/04/darren_sammy.jpg",
  },
  {
    name: "Denesh Ramdin",
    team: "West Indies",
    t20_wc_win_year: "2012, 2016",
    role: "Wicket-keeper / Batsman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Kggl_ryi4San7t4wCwZJ2sBd-tPJWg4REw&s",
  },
  {
    name: "Johnson Charles",
    team: "West Indies",
    t20_wc_win_year: "2012, 2016",
    role: "Batsman",
    image:
      "https://alchetron.com/cdn/johnson-charles-b75ba59f-26c3-443f-accf-6bc85e64778-resize-750.jpeg",
  },
  {
    name: "Andre Russell",
    team: "West Indies",
    t20_wc_win_year: "2012, 2016",
    role: "All-rounder",
    image:
      "https://media.gettyimages.com/id/2007288707/photo/perth-australia-andre-russell-of-the-west-indies-walks-from-the-field-after-being-dismissed.jpg?s=612x612&w=gi&k=20&c=trad7nIMo8Vd2DgmAsCJgRre3cM_p6TnDPrJ_v4h_gs=",
  },
  {
    name: "Sunil Narine",
    team: "West Indies",
    t20_wc_win_year: 2012,
    role: "Spinner / All-rounder",
    image:
      "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/sunil-narine.png",
  },
  {
    name: "Samuel Badree",
    team: "West Indies",
    t20_wc_win_year: "2012, 2016",
    role: "Spinner",
    image:
      "https://img.cricketnmore.com/uploads/2021/03/samuel-badree-west-indies.jpg",
  },
  {
    name: "Ravi Rampaul",
    team: "West Indies",
    t20_wc_win_year: 2012,
    role: "Bowler / All-rounder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8zD524COjSXccXjPW9Wyr7Yz6XsJE7VXhA&s",
  },
  {
    name: "Rovman Powell",
    team: "West Indies",
    t20_wc_win_year: 2012,
    role: "Batsman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKpCGs6lXoBYZkw8LJBWDpgC0dcl4YNfcSQ&s",
  },
  {
    name: "Mahela Jayawardene",
    team: "Sri Lanka",
    t20_wc_win_year: 2014,
    role: "Batsman",
    image:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_60/lsci/db/PICTURES/CMS/128700/128731.jpg",
  },
  {
    name: "Kumar Sangakkara",
    team: "Sri Lanka",
    t20_wc_win_year: 2014,
    role: "Wicket-keeper / Batsman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5WcEqxR2svRh3shlG0g-huSMRGjb4U6fTg&s",
  },
  {
    name: "Tillakaratne Dilshan",
    team: "Sri Lanka",
    t20_wc_win_year: 2014,
    role: "Batsman",
    image: "https://s.ndtvimg.com/images/stories/07032011/tilakdilshan300.jpg",
  },
  {
    name: "Kusal Perera",
    team: "Sri Lanka",
    t20_wc_win_year: 2014,
    role: "Wicket-keeper / Batsman",
    image:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/406900/406921.jpg",
  },
  {
    name: "Angelo Mathews",
    team: "Sri Lanka",
    t20_wc_win_year: 2014,
    role: "All-rounder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Angelo_Mathews_%285338334462%29.jpg",
  },
  {
    name: "Thisara Perera",
    team: "Sri Lanka",
    t20_wc_win_year: 2014,
    role: "All-rounder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOQLarvu0N-hFZjwvxKpy6YIW2csWsSredQ&s",
  },
  {
    name: "Rangana Herath",
    team: "Sri Lanka",
    t20_wc_win_year: 2014,
    role: "Bowler / Spinner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HkERGQm_Cnp_AehjnvtWOahnYgWqE5jV5A&s",
  },
  {
    name: "Lasith Malinga",
    team: "Sri Lanka",
    t20_wc_win_year: 2014,
    role: "Bowler",
    image:
      "https://i.pinimg.com/originals/9a/32/9a/9a329afd9fca89f3e04f9b15b3db9eab.jpg",
  },
  {
    name: "Sachithra Senanayake",
    team: "Sri Lanka",
    t20_wc_win_year: 2014,
    role: "Spinner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5CWLlyfc8koazMQGNPBj0awS5zXsvmh1Ffw&s",
  },
  {
    name: "Nuwan Kulasekara",
    team: "Sri Lanka",
    t20_wc_win_year: 2014,
    role: "Bowler / All-rounder",
    image:
      "https://alchetron.com/cdn/nuwan-kulasekara-c9631684-4a85-4116-96f6-cfebe19d404-resize-750.jpeg",
  },
  {
    name: "Lahiru Thirimanne",
    team: "Sri Lanka",
    t20_wc_win_year: 2014,
    role: "Batsman",
    image:
      "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_66f2ba7e9a.jpg",
  },
  {
    name: "Suranga Lakmal",
    team: "Sri Lanka",
    t20_wc_win_year: 2014,
    role: "Bowler",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZeHlBxKlm8KCb30ngofkUe6cgEsA3i2pH1A&s",
  },
  {
    name: "Lendl Simmons",
    team: "West Indies",
    t20_wc_win_year: 2016,
    role: "Batsman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-2CbbEuTUhR0TdlCHsL29tY0CnazQCGx4w&s",
  },
  {
    name: "Carlos Brathwaite",
    team: "West Indies",
    t20_wc_win_year: 2016,
    role: "All-rounder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQSWpuZd0siUpEM-wMMd-7awDcVNszfAcKQ&s",
  },
  {
    name: "Sulieman Benn",
    team: "West Indies",
    t20_wc_win_year: 2016,
    role: "Spinner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrVwWQmPRfS8UDRQkeHx0s2ZJQau2DUofnqg&s",
  },
  {
    name: "Jofra Archer",
    team: "West Indies",
    t20_wc_win_year: 2016,
    role: "Bowler",
    image: "https://pbs.twimg.com/media/ECkX47OX4AEmXvn.jpg",
  },
  {
    name: "Aaron Finch",
    team: "Australia",
    t20_wc_win_year: 2021,
    role: "Batsman / Captain",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwP9GPtMyiyxuWfsDaHwnbdLlDdc-DLmxvQ&s",
  },
  {
    name: "David Warner",
    team: "Australia",
    t20_wc_win_year: 2021,
    role: "Batsman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6GEUxTaor6RRqkt9SalgQifSsDAlV_Bvjw&s",
  },
  {
    name: "Glenn Maxwell",
    team: "Australia",
    t20_wc_win_year: 2021,
    role: "All-rounder",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzNjNTNlMzQtY2RjYS00NTYyLWI2N2UtYTFhNmI0NzAyMjcyXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Steve Smith",
    team: "Australia",
    t20_wc_win_year: 2021,
    role: "Batsman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkaR6BVsJad5ykBf5qT2vKvx-q6YC-6DTjA&s",
  },
  {
    name: "Matthew Wade",
    team: "Australia",
    t20_wc_win_year: 2021,
    role: "Wicket-keeper / Batsman",
    image:
      "https://media.gettyimages.com/id/1161358533/photo/birmingham-england-matthew-wade-of-australia-poses-for-a-portrait-during-the-icc-cricket.jpg?s=612x612&w=gi&k=20&c=zO01Y9AC1Kuhz2ZRJ7hUgFwychgEmreGimvvoFF5ADA=",
  },
  {
    name: "Pat Cummins",
    team: "Australia",
    t20_wc_win_year: 2021,
    role: "Bowler / All-rounder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZii_O2C6AOpfFaHJql97rLKXxxD4N3x-kw&s",
  },
  {
    name: "Mitchell Starc",
    team: "Australia",
    t20_wc_win_year: 2021,
    role: "Bowler",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcREU4jwpmV1ccA7PRuCw81VDAQiM9W_WgQ&s",
  },
  {
    name: "Josh Hazlewood",
    team: "Australia",
    t20_wc_win_year: 2021,
    role: "Bowler",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/2018_Josh_Hazlewood_%28cropped%29.jpg",
  },
  {
    name: "Adam Zampa",
    team: "Australia",
    t20_wc_win_year: 2021,
    role: "Spinner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0Nx33N6vuG3X92ZStaMG_LjDd-SWosFR6Q&s",
  },
  {
    name: "Marcus Stoinis",
    team: "Australia",
    t20_wc_win_year: 2021,
    role: "All-rounder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPwW5tTr6atFW5wZ7YTcx_DM0FDbK7AlRNQ&s",
  },
  {
    name: "Ashton Agar",
    team: "Australia",
    t20_wc_win_year: 2021,
    role: "All-rounder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQ16lBwVbHkBYgyAlCE031ofZpZCVNvFLDg&s",
  },
  {
    name: "Cameron Green",
    team: "Australia",
    t20_wc_win_year: 2021,
    role: "All-rounder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Cameron_Green_fielding_Boxing_Day_2022_%28cropped%29.jpg/960px-Cameron_Green_fielding_Boxing_Day_2022_%28cropped%29.jpg",
  },
  {
    name: "Daniel Sams",
    team: "Australia",
    t20_wc_win_year: 2021,
    role: "Bowler / All-rounder",
    image:
      "https://images.mykhel.com//webp/images/cricket/players/5/8285.jpg?v=5",
  },
  {
    name: "Jos Buttler",
    team: "England",
    t20_wc_win_year: 2022,
    role: "Wicket-keeper / Batsman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwsOe029FX1b3v8OvnL0ZmsPruxwhfEb5THA&s",
  },
  {
    name: "Alex Hales",
    team: "England",
    t20_wc_win_year: 2022,
    role: "Batsman",
    image:
      "https://i.dailymail.co.uk/1s/2019/04/26/19/12760104-6964291-England_star_Alex_Hales_has_been_slapped_with_a_21_day_ban_for_u-a-13_1556302324727.jpg",
  },
  {
    name: "Philip Salt",
    team: "England",
    t20_wc_win_year: 2022,
    role: "Wicket-keeper / Batsman",
    image:
      "https://www.asksportsinfo.com/wp-content/uploads/2024/12/phil-salt-england-cricketer.webp",
  },
  {
    name: "Ben Stokes",
    team: "England",
    t20_wc_win_year: 2022,
    role: "All-rounder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/BEN_STOKES_%2811704837023%29_%28cropped%29.jpg/960px-BEN_STOKES_%2811704837023%29_%28cropped%29.jpg",
  },
  {
    name: "Harry Brook",
    team: "England",
    t20_wc_win_year: 2022,
    role: "Batsman",
    image:
      "https://crickpro.com/_next/image?url=https%3A%2Fcdn.crickpro.net%2Fstatic%2F24776%2Fuser%2FAegEmpjRimSM1ixZGeK5ozFQldw0oI4y8K0svIfv.jpg&w=384&q=75",
  },
  {
    name: "Liam Livingstone",
    team: "England",
    t20_wc_win_year: 2022,
    role: "All-rounder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4FBvNgP1nlTYlxUYbzRqd96pMYZdFTOEbw&s",
  },
  {
    name: "Moeen Ali",
    team: "England",
    t20_wc_win_year: 2022,
    role: "All-rounder",
    image:
      "https://media.gettyimages.com/id/1841159984/photo/moeen-ali-of-england-poses-for-a-portrait-at-vivian-richards-cricket-stadium-in-north-sound.jpg?s=612x612&w=gi&k=20&c=eG2m-JK5z4FrRo4nWPrr1FEVKfcH6qSXzTEspQSfq7s=",
  },
  {
    name: "Sam Curran",
    team: "England",
    t20_wc_win_year: 2022,
    role: "All-rounder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yVYDIjBpW0GYM3u2vjPERsl6rt8vWuJEtw&s",
  },
  {
    name: "Chris Woakes",
    team: "England",
    t20_wc_win_year: 2022,
    role: "Bowler / All-rounder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/Chris_Woakes_2022.jpg",
  },
  {
    name: "Chris Jordan",
    team: "England",
    t20_wc_win_year: 2022,
    role: "Bowler",
    image:
      "https://i.guim.co.uk/img/media/4f3a7df61d012d47dd7553006e58f68c05868d8b/0_228_2474_1484/master/2474.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5d38b994878e1e94a7e51fc759fa36fc",
  },
  {
    name: "Adil Rashid",
    team: "England",
    t20_wc_win_year: 2022,
    role: "Bowler / Spinner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-7zYXHpeOOtlL7a8HUFq_rldfzC0-Btocw&s",
  },
  {
    name: "Mark Wood",
    team: "England",
    t20_wc_win_year: 2022,
    role: "Bowler",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgL7_hCn0TUelJ8mUJMwpV3Q4DFKTs8oh_w&s",
  },
  {
    name: "Virat Kohli",
    team: "India",
    t20_wc_win_year: 2024,
    role: "Batsman",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg",
  },
  {
    name: "Suryakumar Yadav",
    team: "India",
    t20_wc_win_year: 2024,
    role: "Batsman / All-rounder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Suryakumar_Yadav_in_PMO_New_Delhi.jpg",
  },
  {
    name: "Yashasvi Jaiswal",
    team: "India",
    t20_wc_win_year: 2024,
    role: "Batsman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsH3R82jrsp7E-5lf_ZoeuIo5s41oiIGmkIQ&s",
  },
  {
    name: "Rishabh Pant",
    team: "India",
    t20_wc_win_year: 2024,
    role: "Wicket‑keeper / Batsman",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Rishabh_Pant.jpg/250px-Rishabh_Pant.jpg",
  },
  {
    name: "Sanju Samson",
    team: "India",
    t20_wc_win_year: 2024,
    role: "Wicket‑keeper / Batsman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVmMVCYfiNj2M7K-a1DaUYIJ9aQpvJ29Cxg&s",
  },
  {
    name: "Shivam Dube",
    team: "India",
    t20_wc_win_year: 2024,
    role: "All‑rounder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Shivam_Dube_in_PMO_New_Delhi.jpg/250px-Shivam_Dube_in_PMO_New_Delhi.jpg",
  },
  {
    name: "Hardik Pandya",
    team: "India",
    t20_wc_win_year: 2024,
    role: "All‑rounder / Vice‑captain",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjdQpY98TXuqgq7d4JwmJpNVBpd8xLELWNg&s",
  },
  {
    name: "Ravindra Jadeja",
    team: "India",
    t20_wc_win_year: 2024,
    role: "All‑rounder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/PM_Shri_Narendra_Modi_with_Ravindra_Jadeja_%28Cropped%29.jpg",
  },
  {
    name: "Axar Patel",
    team: "India",
    t20_wc_win_year: 2024,
    role: "All‑rounder / Spinner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXbqUm2LumwAAM3lq3YDoMOY3W6QRXT8jtA&s",
  },
  {
    name: "Kuldeep Yadav",
    team: "India",
    t20_wc_win_year: 2024,
    role: "Bowler / Spinner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXpgEeGbHinGhO4DKUQ4flahXRcKbkB1l9w&s",
  },
  {
    name: "Yuzvendra Chahal",
    team: "India",
    t20_wc_win_year: 2024,
    role: "Bowler / Spinner",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Yuzvendra_Chahal_in_PMO_New_Delhi.jpg/250px-Yuzvendra_Chahal_in_PMO_New_Delhi.jpg",
  },
  {
    name: "Arshdeep Singh",
    team: "India",
    t20_wc_win_year: 2024,
    role: "Bowler / All‑rounder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0pDByWryjaXhxlFhk4U4tm0CRY-2aNVypQ&s",
  },
  {
    name: "Jasprit Bumrah",
    team: "India",
    t20_wc_win_year: 2024,
    role: "Bowler / Pace",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9_FPr_zoRrYgE1ZhCqHJbEhRuxIOEcZrAg&s",
  },
  {
    name: "Mohammed Siraj",
    team: "India",
    t20_wc_win_year: 2024,
    role: "Bowler / Pace",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOUcih9r4YwkiokWFpkwvGUNTDmpc3hXr8A&s",
  },
];

export default players;
