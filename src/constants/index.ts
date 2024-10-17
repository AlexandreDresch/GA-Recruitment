import { Operative } from "../types";

export const hierarchy = [
  {
    title: "Central Core (The Authority)",
    purpose:
      "Controls the highest-level operations. Its directives are absolute, unquestionable, and incomprehensible to most.",
    accessLevel: "Top Clearance Only",
  },
  {
    title: "Sector Supervisors",
    purpose:
      "Manage individual sectors of the megastructure, ensuring operational efficiency.",
    accessLevel: "Sector Clearance Required",
  },
  {
    title: "Operatives (You)",
    purpose:
      "Execute directives from higher levels, terminating anomalies or collecting critical data.",
    accessLevel: "Varies by Rank and Mission",
  },
  {
    title: "Maintenance Drones",
    purpose:
      "Automated tasks include constant surveillance, sector maintenance, and enforcing the will of the Administration.",
    accessLevel: "Restricted Interaction",
  },
];

export const controlAreas = [
  {
    title: "Infrastructure Stability",
    description: "Continuous monitoring and repair of structural components.",
  },
  {
    title: "Data Flow Management",
    description: "Complete control over communication channels.",
  },
  {
    title: "Population Regulation",
    description:
      "Automated enforcement of population levels through sector restrictions.",
  },
  {
    title: "Anomaly Detection",
    description:
      "Surveillance systems capable of identifying deviations within seconds.",
  },
];

export const archiveData = {
  archiveItems: [
    {
      title: "Terminated Agent 4044983",
      description:
        "Agent 404 identified as non-compliant. Immediate termination executed per protocol directive 904-B. No further action required.",
      accessLevel: "Classified",
      status: "Classified",
      date: "01-12-3095",
    },
    {
      title: "Operation Anomaly 04X1",
      description:
        "Containment procedure for anomaly in Sector 17 initiated. Operative intervention deemed necessary. Status: operation completed. Further analysis not authorized.",
      accessLevel: "Restricted",
      status: "Terminated",
      date: "21-03-3080",
    },
    {
      title: "Signal Loss",
      description:
        "System disruption detected. Communication loss across primary nodes. All dispatched units unresponsive. Investigation process suspended pending system reset.",
      accessLevel: "Public",
      status: "Restricted",
      date: "15-08-3100",
    },
    {
      title: "Protocol Anomaly – 00A5",
      description:
        "Anomalous behavior identified within command protocol system. Deviations detected. Investigative procedure ongoing. Full system restoration incomplete.",
      accessLevel: "Public",
      status: "Under Review",
      date: "30-11-3099",
    },
    {
      title: "Project Gatekeeper",
      description:
        "Autonomous sentinel project initiated. Malfunction logs indicate project failure. All related data archived and access restricted. No further developments scheduled.",
      accessLevel: "Classified",
      status: "Archived",
      date: "02-05-3085",
    },
    {
      title: "Entity ZN-42",
      description:
        "Unknown lifeform encountered during standard megastructure inspection. Entity exhibited high-level defense capabilities. Encounter logged. Quarantine status: active.",
      accessLevel: "Classified",
      status: "Quarantined",
      date: "10-07-3092",
    },
  ],
};

export const terminalInitialization: string[] = [
  "Initializing The City Administration Terminal.",
  "System Check: All systems operational. Scanning for classified files... Stand by.",
  "...",
  "Connection established.",
  "Type 'help' for a list of available commands. Your clearance is noted.",
];

export const operativesData: Operative[] = [
  {
    name: "Killy",
    description: "The protagonist searching for the Net Terminal Gene.",
    image:
      "https://static.wikia.nocookie.net/blame/images/2/29/Killy1.png/revision/latest?cb=20190619192420",
    accessLevel: "High",
  },
  {
    name: "Cibo",
    description: "A scientist who aids Killy in his quest.",
    image:
      "https://static.wikia.nocookie.net/blame/images/2/29/Killy1.png/revision/latest?cb=20190619192420",
    accessLevel: "Medium",
  },
  {
    name: "The Safeguard",
    description: "A mysterious entity enforcing the rules of The City.",
    image:
      "https://static.wikia.nocookie.net/blame/images/2/29/Killy1.png/revision/latest?cb=20190619192420",

    accessLevel: "High",
  },
  {
    name: "Dwellers",
    description: "Inhabitants of The City who interact with Killy.",
    image:
      "https://static.wikia.nocookie.net/blame/images/2/29/Killy1.png/revision/latest?cb=20190619192420",
    accessLevel: "Low",
  },
];
