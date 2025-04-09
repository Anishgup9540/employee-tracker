export type PerformanceMetrics = {
    callsHandled: number;
    customerSatisfaction: number;
    responseTime: string;
    closedTickets: number;
};

export type User = {
    id: number;
    name: string;
    img: string;
    email: string;
    password: string;
    role: string;
    department: string;
    joinDate: string;
    score?: number;
    status?: string;
    performanceMetrics?: PerformanceMetrics;
};

export const initialUsers: User[] = [
    {
        id: 1,
        name: "Alice Johnson",
        img: "https://www.thefamouspeople.com/profiles/images/elon-musk-1.jpg",
        email: "alice.johnson@example.com",
        password: "password123",
        role: "BOTP Employee",
        status: "In_Progress",
        score: 85,
        department: "Customer Support",
        joinDate: "2022-05-15",
        performanceMetrics: {
            callsHandled: 245,
            customerSatisfaction: 92,
            responseTime: "1.5 min",
            closedTickets: 198,
        },
    },
    {
        id: 2,
        name: "Bob Williams",
        img: "https://www.thefamouspeople.com/profiles/images/elon-musk-1.jpg",
        email: "bob.williams@example.com",
        password: "securepass456",
        role: "BOTP Employee",
        status: "Completed",
        score: 75,
        department: "Technical Support",
        joinDate: "2023-01-10",
        performanceMetrics: {
            callsHandled: 187,
            customerSatisfaction: 85,
            responseTime: "2.1 min",
            closedTickets: 163,
        },
    },
    {
        id: 3,
        name: "Emma Wilson",
        img: "https://www.thefamouspeople.com/profiles/images/elon-musk-1.jpg",
        email: "emma.wilson@example.com",
        password: "managerpass789",
        role: "Manager",
        status: "Yet_Start",
        department: "Operations",
        joinDate: "2020-08-22",
    },
];

