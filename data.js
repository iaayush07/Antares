export const sampleDeals = [
    {
      id: '1',
      name: 'AEM Buyer, LLC',
      amount: 1000000.00,
      status: {
        initiateClosing: 'in-progress',
        amlKyc: 'not-started',
        antaresWorkflow: 'not-started',
        miscellaneous: 'not-started',
        keyDeliverables: 'not-started',
        drafts: 'not-started',
        postClosing: 'not-started'
      },
      tasks: [
        {
          id: 't1',
          number: 'T-1',
          title: 'Move to a Pipeline Code of 2 in BMS',
          assignee: 'duane',
          status: 'completed',
          personnel: 'Credit',
          targetDate: '09.12.2024',
          lastUpdate: '09.12.2024'
        },
      ]
    },
  ];
  export const dealUpdateData = [
    {
      id: 1,
      avatarUrl: "src/assets/icons/initial-closing-process.svg",
      badgeText: "8/10",
      name: "John Smith",
      date: "09.12.2024",
      title: "Initiate Closing Process",
      avatarBgColor: "#6887D8",
      badgeBgColor: "#68A1D8", 
    },
    {
      id: 2,
      avatarUrl: "src/assets/icons/aml-kyc.svg",
      badgeText: "5/5",
      name: "Jane Smith",
      date: "09.15.2024",
      title: "AML / KYC",
      avatarBgColor: "#3D5063",
      badgeBgColor: "#68A1D8", 
    },
    {
      id: 3,
      avatarUrl: "src/assets/icons/antares-workflow.svg",
      badgeText: "7/7",
      name: "Jane Smith",
      date: "09.17.2024",
      title: "Antares Workflow",
      avatarBgColor: "#958B89",
      badgeBgColor: "#68A1D8", 
    },
    {
      id: 4,
      avatarUrl: "src/assets/icons/miscellaneous.svg",
      badgeText: "0/3",
      name: "",
      date: "",
      title: "Miscellaneous",
      avatarBgColor: "#FBAF3F",
      badgeBgColor: "#68A1D8", 
    },
    {
      id: 5,
      avatarUrl: "src/assets/icons/key-deliverables.svg",
      badgeText: "0/4",
      name: "",
      date: "",
      title: "Key Deliverables",
      avatarBgColor: "#3D5063",
      badgeBgColor: "#68A1D8", 
    },
    {
      id: 6,
      avatarUrl: "src/assets/icons/drafts.svg",
      badgeText: "0/4",
      name: "",
      date: "",
      title: "Drafts",
      avatarBgColor: "#428993",
      badgeBgColor: "#68A1D8", 
    },
    {
      id: 7,
      avatarUrl: "src/assets/icons/post-closing-items.svg",
      badgeText: "0/5",
      name: "",
      date: "",
      title: "Post-Closing Items",
      avatarBgColor: "#85556A",
      badgeBgColor: "#68A1D8", 
    },
  ];

  export const closingProgressData = [
    {
      id:1,
      taskNo: 'T-1',
      taskName: 'Move to a Pipeline Code of 2 in BMS',
      taskStatus: 'Completed',
      dealTeamMember: 'Duane Burton',
      personnel: 'Credit',
      fileType: [],
      targetDate: '09.12.2024',
      lastUpdated: '09.12.2024',
      isLock: 'false'
    },
    {
      id:2,
      taskNo: 'T-2',
      taskName: 'Place S&U file in the Deal Folder',
      taskStatus: 'Not Started',
      dealTeamMember: 'Duane Burton',
      personnel: 'Credit',
      fileType: [],
      targetDate: '09.12.2024',
      lastUpdated: '09.12.2024',
      isLock: 'false'
    },
    {
      id:3,
      taskNo: 'T-3',
      taskName: 'Move to a Pipeline Code of 2 in BMS',
      taskStatus: 'In Progress',
      dealTeamMember: 'Duane Burton',
      personnel: 'Credit',
      fileType: [],
      targetDate: '09.12.2024',
      lastUpdated: '09.12.2024',
      isLock: 'true'
    },
  ]
  