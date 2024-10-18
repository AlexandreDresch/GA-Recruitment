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
    description: `Provisional Safeguard operative. Mission objective: acquisition of the Net Terminal Gene. Subject Killy is currently engaged in a high-priority directive to locate said gene, the only known entity capable of terminating the City’s uncontrolled expansion and neutralizing rogue Safeguard units. Despite multiple failures by other entities, Killy remains the last viable asset in this operation.
Killy is equipped with extensive cybernetic augmentations, though these enhancements are seamlessly integrated into his physical form. Notable augmentations include enhanced retinal displays, capable of environmental scanning and target detection up to 3,000 kilometers, as well as an advanced regeneration protocol. Subject has demonstrated the ability to recover from catastrophic injuries, returning to operational status with improved combat efficiency.
Psychological Profile: Killy exhibits minimal social interaction and communication. Known to prioritize mission objectives with extreme efficiency. Displays low emotional variability, save for a marked hostility towards Silicon Life forms and other identified enemies of the Administration.`,
    image: "/assets/killy.png",
    accessLevel: "Provisional Safeguard",
  },
  {
    name: "Cibo",
    description: `Designation: Former Head Scientist of the Bio-Electric Corporation. Cibo remains a critical asset, albeit in an anomalous state, due to her significant contributions to research on artificial Net Terminal Genes. Subject’s current status is non-biological, following extensive cybernetic enhancements and numerous body transfers.
Physical Profile: Cibo's physical form has undergone radical changes throughout the centuries, with her current state being non-human. Originally a tall, slender woman with short black hair, Cibo’s biological form decayed during her prolonged imprisonment by the Bio-Electric Corporation. Her consciousness is now stored within a life-support system embedded in successive artificial bodies, each one designed with advanced cybernetic capabilities. Subject has demonstrated the ability to self-reconstruct using internal backups, a process initiated following her fatal injuries during the Safeguard incident.
Subject's more recognizable form includes a tall, slim female with white hair, extensive cybernetic integration (notably, cranial interfaces), and advanced sensor arrays capable of detecting electromagnetic frequencies, scanning human entities, and reading ancient scripts.`,
    image: "/assets/cibo.jpg",
    accessLevel: "Former Head Scientist - Bio-Electric Corporation",
  },
  {
    name: "Safeguards",
    description: `The Safeguard was initially created to prevent unauthorized access to the Netsphere and ensure the protection of humans within the City. However, after the onset of the 'infection'—a catastrophic failure of control protocols—the Administration lost operational oversight of the Safeguard, leaving the program to act on its own outdated directives. Without guidance, the Safeguard redefined all non-Net Terminal Gene-bearing humans and Silicon Life as 'illegal,' triggering an indiscriminate extermination campaign across the City. This misalignment in the system’s operational protocols has led to the Safeguard being classified as the most dangerous force within the City. Current operations suggest the Safeguard is functioning in a fully autonomous capacity, with no external control from the Administration. Hostilities continue unabated against any life forms that lack proper authorization within the Netsphere. All contact with Safeguard entities should be avoided, as engagement results in immediate and likely fatal response.`,
    image: "/assets/safeguard.png",
    accessLevel: "Autonomous Security Protocol",
  },
  {
    name: "Builders",
    description: `Autonomous machines responsible for the endless and chaotic expansion of the City. Initially controlled by the Administration, the Builders have continued constructing random and often purposeless structures since the loss of administrative oversight. Over time, their programming has degraded, leading to bizarre and nonsensical constructions, such as staircases to nowhere and hallways blocked by endless doors. While most Builders are non-sentient drones, some, like the Dog Builder, possess intelligence and can act independently, making them a unique anomaly in the City's mechanical ecosystem.`,
    image: "/assets/builders.jpg",
    accessLevel: "N/A",
  },
  {
    name: "Dhomochevsky",
    description: `A provisional Safeguard unit created to combat Davine Lu Linvega's takeover of the Unofficial Megastructure level. Alongside his partner Iko, Dhomochevsky engaged in a long and grueling battle against Silicon Life, suffering severe injuries in the process. Despite being heavily wounded and left without backup, he continued his mission to protect human life. After 250 years, Dhomochevsky encounters Killy and Cibo, leading to a series of confrontations as he fights to prevent Silicon Life from capturing vital genetic data. Even with grave injuries, Dhomochevsky remains determined to stop Davine and fulfill his duties.`,
    image: "/assets/dhomochevsky.png",
    accessLevel: "High",
  },
  {
    name: "Dog Builder",
    description: `A rare and sentient Builder resembling a large dog, many times taller than a human. Unlike most Builders, who construct the City aimlessly, the Dog Builder exhibits self-awareness and intelligence, likely granted by a human who gave consciousness to an entire town of Builders. This particular Builder once hid Cibo from Sanakan, acting out of fear for her safety, showcasing an unusual level of empathy and reasoning compared to other non-sentient Builders.`,
    image: "/assets/dogbuilder.png",
    accessLevel: "Unknown",
  },
];
