export const projects = [
    {
        id: 1,
        name: "Project 1",
        description: "This is project 1",
        status: "active",
        //projects have buildings, buildings have inpections, inspections have damaages
        buildings: [
            {
                id: 1,
                name: "Building 1",
                description: "This is building 1",
                status: "active",
                inspections: [
                    {
                        id: 1,
                        name: "Inspection 1",
                        description: "This is inspection 1",
                        status: "active",
                        damages: [
                            {
                                id: 1,
                                name: "Damage 1",
                                description: "This is damage 1",
                                status: "active",
                            },
                            {
                                id: 2,
                                name: "Damage 2",
                                description: "This is damage 2",
                                status: "active",
                            },
                        ],
                    },
                    {
                        id: 2,
                        name: "Inspection 2",
                        description: "This is inspection 2",
                        status: "active",
                        damages: [
                            {
                                id: 3,
                                name: "Damage 3",
                                description: "This is damage 3",
                                status: "active",
                            },
                            {
                                id: 4,
                                name: "Damage 4",
                                description: "This is damage 4",
                                status: "active",
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: "Building 2",
                description: "This is building 2",
                status: "active",
                inspections: [
                    {
                        id: 3,
                        name: "Inspection 3",
                        description: "This is inspection 3",
                        status: "active",
                        damages: [
                            {
                                id: 5,
                                name: "Damage 5",
                                description: "This is damage 5",
                                status: "active",
                            },
                          
                        ],
                    },
                    {
                        id: 4,
                        name: "Inspection 4",
                        description: "This is inspection 4",
                        status: "active",
                        damages: [
                            {
                                id: 7,
                                name: "Damage 7",
                                description: "This is damage 7",
                                status: "active",
                            },
                            {
                                id: 8,
                                name: "Damage 8",
                                description: "this is damage 8",
                                status: "active",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: "Project 2",
        description: "This is project 2",
        status: "active",
        buildings: [
            {
                id: 3,
                name: "Building 3",
                description: "This is building 3",
                status: "active",
                inspections: [
                    {
                        id: 5,
                        name: "Inspection 5",
                        description: "This is inspection 5",
                        status: "active",
                        damages: [
                            {
                                id: 9,
                                name: "Damage 9",
                                description: "This is damage 9",
                                status: "active",
                            },
                            {
                                id: 10,
                                name: "Damage 10",
                                description: "This is damage 10",
                                status: "active",
                            },
                        ],
                    },
                    {
                        id: 6,
                        name: "Inspection 6",
                        description: "This is inspection 6",
                        status: "active",
                        damages: [
                            {
                                id: 11,
                                name: "Damage 11",
                                description: "This is damage 11",
                                status: "active",
                            },
                            {
                                id: 12,
                                name: "Damage 12",
                                description: "This is damage 12",
                                status: "active",
                            },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: "Building 4",
                description: "This is building 4",
                status: "active",
                inspections: [
                    {
                        id: 7,
                        name: "Inspection 7",
                        description: "This is inspection 7",
                        status: "active",
                        damages: [
                            {
                                id: 13,
                                name: "Damage 13",
                                description: "This is damage 13",
                                status: "active",
                            },
                            {
                                id: 14,
                                name: "Damage 14",
                                description: "This is damage 14",
                                status: "active",
                            },
                        ],
                    },
                    {
                        id: 8,
                        name: "Inspection 8",
                        description: "This is inspection 8",
                        status: "active",
                        damages: [
                            {
                                id: 15,
                                name: "Damage 15",
                                description: "This is damage 15"
                            },
                            {
                                id: 16,
                                name: "Damage 16",
                                description: "This is damage 16"
                            }
                        ],
                    },
                ],
            },
        ],

    }
    
]


export const getProjectBuildings= (projectId: number) => {
    const project = projects.find((project) => project.id === projectId);
    return project?.buildings;
}

export const getBuildingInspections = (projectId: number, buildingId: number) => {
    const buildings = getProjectBuildings(projectId);
    const building = buildings?.find((building) => building.id === buildingId);
    return building?.inspections;
}

export const getInspectionDamages = (projectId: number, buildingId: number, inspectionId: number) => {
    const inspections = getBuildingInspections(projectId, buildingId);
    const inspection = inspections?.find((inspection) => inspection.id === inspectionId);
    return inspection?.damages;
}



