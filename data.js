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
        // Add more tasks...
      ]
    },
    // Add more deals...
  ];