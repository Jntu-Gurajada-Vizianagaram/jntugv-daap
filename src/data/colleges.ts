export type College = {
  sno: number;
  code: string;
  name: string;
  district: string;
  type: string;
  website: string;
  category: 'Engineering' | 'Pharmacy' | 'Management';
};

export const collegesData: College[] = [
  // Autonomous Engineering Colleges
  { sno: 1, code: 'Q7', name: 'Avanthi Institute of Engineering and Technology, Bhogapuram', district: 'Vizianagaram', type: 'AUTONOMOUS', website: 'https://avanthi.edu.in/', category: 'Engineering' },
  { sno: 2, code: '34', name: 'GMR Institute of Technology, Rajam', district: 'Vizianagaram', type: 'AUTONOMOUS', website: 'https://gmrit.edu.in/', category: 'Engineering' },
  { sno: 3, code: 'KD', name: 'Lendi Institute of Engineering & Technology, Jonnada', district: 'Vizianagaram', type: 'AUTONOMOUS', website: 'https://lendi.org/', category: 'Engineering' },
  { sno: 4, code: '33', name: 'Maharaj Vijayaram Gajapathi Raj College of Engineering (MVGR)', district: 'Vizianagaram', type: 'AUTONOMOUS', website: 'https://mvgrce.com/', category: 'Engineering' },
  { sno: 5, code: '98', name: 'Raghu Engineering College, Dakamarri', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://raghuenggcollege.com/', category: 'Engineering' },
  { sno: 6, code: 'L3', name: 'Vignans Institute of Information Technology, Duvvada', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://vignaniit.edu.in/', category: 'Engineering' },
  { sno: 7, code: 'NU', name: 'Nadimpalli Satyanarayana Raju Institute of Technology, Sontyam', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://nsrit.edu.in/', category: 'Engineering' },
  { sno: 8, code: '81', name: 'Avanthi Institute of Engineering and Technology, Makavarapalem', district: 'Anakapalli', type: 'AUTONOMOUS', website: 'https://avanthi.edu.in/', category: 'Engineering' },
  { sno: 9, code: 'U4', name: 'Dadi Institute of Engineering & Technology, Anakapalli', district: 'Anakapalli', type: 'AUTONOMOUS', website: 'https://diet.edu.in/', category: 'Engineering' },
  { sno: 10, code: 'A5', name: 'Aditya Institute of Technology and Management, Tekkali', district: 'Srikakulam', type: 'AUTONOMOUS', website: 'https://adityatekkali.edu.in/', category: 'Engineering' },
  { sno: 11, code: '6C', name: 'Miracle Educational Society Group of Institutions, Bhogapuram', district: 'Vizianagaram', type: 'AUTONOMOUS', website: 'https://miracle.edu.in/', category: 'Engineering' },
  { sno: 12, code: 'NM', name: 'Vignans Institute of Engineering for Women, Kapujaggarajupeta', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://view.edu.in/', category: 'Engineering' },
  { sno: 13, code: 'NR', name: 'Baba Institute of Technology and Sciences, Bakkannapalem', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://bitsvizag.com/', category: 'Engineering' },
  { sno: 14, code: 'NT', name: 'Visakha Institute of Engineering & Technology, Narava', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://vietvsp.com/', category: 'Engineering' },
  { sno: 15, code: 'W6', name: 'Sri Sivani College of Engineering, Chilakapalem', district: 'Srikakulam', type: 'AUTONOMOUS', website: 'https://srisivani.com/', category: 'Engineering' },

  // Affiliated Engineering Colleges
  { sno: 16, code: 'B6', name: 'Satya Institute of Technology and Management', district: 'Vizianagaram', type: 'PERMANENT', website: 'https://www.sitam.co.in/', category: 'Engineering' },
  { sno: 17, code: 'HQ', name: 'Avanthi Research and Technological Academy', district: 'Vizianagaram', type: 'TEMPORARY', website: 'https://arta.ac.in/', category: 'Engineering' },
  { sno: 18, code: '99', name: 'Avanthi St.Theressa Institute of Engg. & Tech', district: 'Vizianagaram', type: 'TEMPORARY', website: 'https://www.sttheressaengg.ac.in/', category: 'Engineering' },
  { sno: 19, code: '8K', name: 'Gokul Group of Institutions', district: 'Vizianagaram', type: 'TEMPORARY', website: 'http://www.gokulcollege.com/', category: 'Engineering' },
  { sno: 20, code: 'L6', name: 'Chaitanya Engineering College', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'http://cec.ac.in/', category: 'Engineering' },
  { sno: 21, code: '6E', name: 'Gonna Institute of Info. Tech. and Sciences', district: 'Anakapalli', type: 'TEMPORARY', website: 'http://www.giits.in/', category: 'Engineering' },
  { sno: 22, code: '6F', name: 'Sai Ganapathi Engineering College', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'https://www.sgec.edu.in/', category: 'Engineering' },
  { sno: 23, code: '6J', name: 'Simhadri Educational Society Group of Inst.', district: 'Anakapalli', type: 'TEMPORARY', website: 'https://simhadhriedu.org/', category: 'Engineering' },
  { sno: 24, code: 'MT', name: 'Sri Venkateswara College of Engg. & Tech', district: 'Srikakulam', type: 'TEMPORARY', website: 'https://svcet.net/new/', category: 'Engineering' },
  { sno: 25, code: 'PC', name: 'N S Raju Institute of Engineering & Technology', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'https://www.nsriet.edu.in/', category: 'Engineering' },
  { sno: 26, code: 'V1', name: 'Behara College of Engineering and Technology', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'https://beharaengg.edu.in/', category: 'Engineering' },

  // Autonomous Pharmacy Colleges
  { sno: 1, code: 'T5', name: 'Avanthi Institute of Pharmaceutical Sciences, Cherukupalli', district: 'Vizianagaram', type: 'AUTONOMOUS', website: 'https://avanthipharma.ac.in/', category: 'Pharmacy' },
  { sno: 2, code: 'AC', name: 'Vignan Institute of Pharmaceutical Technology, Duvvada', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://vipt.edu.in/', category: 'Pharmacy' },

  // Affiliated Pharmacy Colleges
  { sno: 3, code: 'HH', name: 'Gokul College of Pharmacy', district: 'Vizianagaram', type: 'TEMPORARY', website: 'https://www.gokulcollege.com/sites/Pharmacy/home.html', category: 'Pharmacy' },
  { sno: 4, code: 'B7', name: 'Emmanuel College of Pharmacy', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'https://emmanuelcollegeofpharmacy.com/', category: 'Pharmacy' },
  { sno: 5, code: 'PK', name: 'Viswanadha Institute of Pharm. Sciences', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'https://vnips.in/Home.html', category: 'Pharmacy' },
  { sno: 6, code: 'DA', name: 'Sri Sivani College of Pharmacy', district: 'Srikakulam', type: 'TEMPORARY', website: 'https://srisivanisscp.com/', category: 'Pharmacy' },

  // Management Colleges
  { sno: 1, code: 'C4', name: 'All Saints PG College', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'https://allsaintspgcollege.com/', category: 'Management' },
  { sno: 2, code: '8M', name: 'Visakha Institute of Management Science', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'http://vimsvizag.com/', category: 'Management' },
];
