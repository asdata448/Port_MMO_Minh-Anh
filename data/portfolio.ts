import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Võ Thị Minh Anh",
    title: "HR Executive",
    dob: "14/07/2003",
    phone: "0866290893",
    email: "minhavo.hr@gmail.com",
    location: "TP. Hồ Chí Minh",
    linkedin: "https://www.linkedin.com/in/minh-anh-v%E1%BB%8D-5508892a5/"
  },

  education: [
    {
      school: "Đại học Cần Thơ",
      degree: "Cử nhân",
      major: "Quản trị Nhân lực",
      period: "2021 - 2025",
      gpa: "3.52/4.0",
      activities: [
        "Bí thư lớp K2021 ngành Quản trị Nhân lực",
        "Trưởng ban Media Khoa Kinh tế",
        "Thành viên Team Tư vấn Tuyển sinh"
      ]
    },
    {
      school: "THPT Hùng Vương",
      degree: "THPT",
      major: "Khối Xã hội",
      period: "2018 - 2021",
      gpa: "7.8/10.0"
    }
  ],

  skills: {
    technical: [
      { name: "MS Office", level: 90 },
      { name: "Advanced Excel", level: 80 },
      { name: "Canva", level: 85 },
      { name: "ChatGPT", level: 75 },
      { name: "Copilot", level: 70 },
      { name: "CapCut", level: 80 }
    ],
    soft: [
      { name: "Kỹ năng giao tiếp", level: 90 },
      { name: "Giải quyết vấn đề", level: 85 },
      { name: "Khả năng thích nghi", level: 85 },
      { name: "Làm việc nhóm", level: 90 },
      { name: "Quản lý thời gian", level: 85 },
      { name: "Kỹ năng thuyết trình", level: 80 }
    ],
    languages: [
      { name: "Tiếng Việt (Bản ngữ)", level: 100 },
      { name: "Tiếng Anh (Trung cấp)", level: 70 }
    ],
    tools: [
      { name: "Tiktok", level: 80 },
      { name: "Facebook", level: 85 },
      { name: "Instagram", level: 75 }
    ]
  },

  experience: [
    {
      company: "CÔNG TY TNHH THƯƠNG MẠI NHÀ PHẨM",
      position: "Nhân viên Hành chính Nhân sự",
      period: "09/2024 - Hiện tại",
      location: "TP. Hồ Chí Minh",
      responsibilities: [
        "Quản lý hồ sơ nhân sự nội bộ theo quy định công ty",
        "Hỗ trợ các công việc tuyển dụng: phỏng vấn, đào tạo hướng dẫn",
        "Theo dõi kỷ luật lao động, vệ sinh nơi làm việc của nhân viên",
        "Thực hiện báo cáo số liệu nhân sự theo yêu cầu",
        "Phối hợp tổ chức các sự kiện, hoạt động nội bộ, team building"
      ]
    },
    {
      company: "CÔNG TY CP PHẦN MỀM DOANH NGHIỆP VINA",
      position: "Thực tập sinh Nhân sự",
      period: "06/2024 - 08/2024",
      location: "TP. Hồ Chí Minh",
      responsibilities: [
        "Hỗ trợ quản lý hồ sơ ứng viên, lưu trữ dữ liệu nhân sự",
        "Viết bài đăng tuyển dụng trên các kênh: TopCV, VietnamWorks, LinkedIn",
        "Hỗ trợ phỏng vấn sơ loại và đánh giá ứng viên",
        "Hỗ trợ quy trình onboard và offboard nhân viên",
        "Thực hiện các công việc hành chính nhân sự khác theo yêu cầu"
      ]
    },
    {
      company: "TRUNG TÂM HỖ TRỢ KHÁCH HÀNG FPT",
      position: "Thực tập sinh Marketing",
      period: "01/2024 - 05/2024",
      location: "TP. Hồ Chí Minh",
      responsibilities: [
        "Viết nội dung marketing cho các kênh truyền thông",
        "Hỗ trợ đăng bài lên fanpage Facebook và Instagram",
        "Hỗ trợ quản lý Fanpage và phản hồi khách hàng",
        "Phối hợp thực hiện các chiến dịch marketing"
      ]
    }
  ],

  projects: [
    {
      title: "Freshman Welcome Day 2021",
      role: "Thành viên Ban Tổ chức",
      period: "08/2021 - 10/2021",
      organization: "Khoa Kinh tế - ĐH Cần Thơ",
      description: "Tổ chức sự kiện chào tân sinh viên K21 với hơn 300 tham gia, bao gồm các hoạt động team building, văn nghệ và giao lưu.",
      link: "https://www.facebook.com/KKT.DHCT/posts/461768778500362",
      tags: ["Event Organization", "Teamwork", "Communication"]
    },
    {
      title: "Teambuilding Sinh viên K21",
      role: "Thành viên Ban Nhân sự",
      period: "05/2022 - 07/2022",
      organization: "Khoa Kinh tế - ĐH Cần Thơ",
      description: "Phối hợp tổ chức hoạt động team building cho sinh viên khóa K21 với các trò chơi vận động và thách thức đồng đội.",
      link: "https://www.facebook.com/KKT.DHCT/posts/461768778500362",
      tags: ["HR Activities", "Event Planning"]
    },
    {
      title: "Mùa hè xanh 2022",
      role: "Thành viên",
      period: "07/2022 - 08/2022",
      organization: "Thành đoàn TP. Cần Thơ",
      description: "Tham gia chiến dịch tình nguyện Mùa hè xanh với các hoạt động: dạy văn hóa, xây dựng cầu nông, tổ chức hoạt động vui chơi cho trẻ em.",
      link: "https://www.facebook.com/100041522759594/posts/2805676243071156",
      tags: ["Volunteering", "Community Service", "Teaching"]
    }
  ],

  certifications: [
    {
      name: "Chứng chỉ Tin học văn phòng MOS",
      issuer: "Microsoft",
      date: "2023",
      link: "https://www.certiport.com/portal/pages/credential verification.aspx"
    },
    {
      name: "Chứng chỉ Tiếng Anh B1",
      issuer: "Đại học Cần Thơ",
      date: "2022"
    }
  ]
};
