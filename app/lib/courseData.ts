export const courses = [
  {
    id: "ai-playground",
    title: "The AI Playground Bootcamp",
    price: 1500,
    tagline: "An entry-level, collaborative bootcamp built for students and parents to build real engineering projects side-by-side.",
    hardwareRequired: "100% Digital Simulators",
    modules: [
      { title: "Week 1: Fundamentals", desc: "2-Week Guided Cohort Experience with Scratch-Level Interactive AI Tools." },
      { title: "Week 2: Logic & Execution", desc: "Block-Based Coding, Logic Labs, and 100% Digital Simulators." }
    ]
  },
  {
    id: "robotics",
    title: "Dedicated Robotics",
    price: 2999,
    tagline: "Master kinematic foundations, wheel chassis builds, and real-time path planning loops.",
    hardwareRequired: "Custom Kits Available / Simulation Supported",
    modules: [
      { title: "Module 1: Kinematics & Chassis Design", desc: "Differential drive mechanics, center of mass tracking, and mechanical assembly setups." },
      { title: "Module 2: H-Bridge & Core Actuation", desc: "Pulse Width Modulation (PWM) speed constraints, driver isolation networks, and directional control loops." },
      { title: "Module 3: Obstacle Logic & Feedback", desc: "Ultrasonic array ping setups, sensor timing loops, and conditional real-time steering choices." },
      { title: "Module 4: Path Integration", desc: "State machines for navigation arrays, battery distribution monitoring, and basic diagnostic reporting." }
    ]
  },
  {
    id: "drones",
    title: "Autonomous Drones",
    price: 3499,
    tagline: "Deep-dive into multi-rotor aerodynamics, telemetry streams, and autonomous mission controls.",
    hardwareRequired: "Custom Kits Available / Simulation Supported",
    modules: [
      { title: "Module 1: Aerodynamics & Anatomy", desc: "Multi-rotor structural physics (Pitch, Roll, Yaw vectors), thrust calculations, battery safety pipelines, and component mapping." },
      { title: "Module 2: Flight Controllers", desc: "Onboard IMU processing, gyroscope feedback configurations, and a visual breakdown of loop feedback stabilization mechanics." },
      { title: "Module 3: Software Configuration", desc: "Flashing firmware via configuration pipelines, sensor alignments, and mandatory flight simulation practices." },
      { title: "Module 4: Mission Planning", desc: "Integrating peripheral GPS units, uploading coordinates, and designing multi-point autonomous flight paths." }
    ]
  },
  {
    id: "electronics-pcb",
    title: "Electronics & PCB Design",
    price: 2499,
    tagline: "Architect your custom circuit boards, route dual traces, and learn surface-mount soldering lines.",
    hardwareRequired: "Software Access (KiCad/EasyEDA)",
    modules: [
      { title: "Module 1: The Building Blocks", desc: "Voltage, current, Ohm's Law matrices, component identities (ICs, capacitors, transistors), and virtual circuit breadboarding." },
      { title: "Module 2: Schematic Blueprints", desc: "EDA platform layout workspaces, custom parts mapping, wiring rule verification algorithms, and electrical error scanning." },
      { title: "Module 3: Board Layout & Routing", desc: "Translating schematics into hardware profiles, routing dual-layer signal traces, adding silkscreens, and generating production Gerber files." },
      { title: "Module 4: Assembly & Firmware", desc: "Soldering safety procedures, mounting through-hole and surface-mount parts, continuity tests, and compiling foundational C++ code." }
    ]
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    price: 3999,
    tagline: "Build functional data pipelines, image classification tools, and lightweight predictive models.",
    hardwareRequired: "Computer / Browser Access",
    modules: [
      { title: "Module 1: Data Architecture Pipelines", desc: "Python fundamental syntaxes, matrix operations using NumPy, and structuring CSV training files." },
      { title: "Module 2: Computer Vision Matrices", desc: "OpenCV pixel operations, thresholding filters, contour map captures, and real-time color tracking arrays." },
      { title: "Module 3: Neural Network Foundations", desc: "Weights, biases, loss reduction logic, and testing classification layers on simple custom datasets." },
      { title: "Module 4: Embedded AI Deployments", desc: "Quantizing deep models to execution graphs, micro-engine runtimes, and local prediction testing loops." }
    ]
  },
  {
    id: "iot-sensors",
    title: "IoT & Sensors",
    price: 1999,
    tagline: "Isolate core peripheral signals and structure direct hardware data buses.",
    hardwareRequired: "Custom Kits Available / Simulation Supported",
    modules: [
      { title: "Module 1: Protocol Infrastructures", desc: "I2C address frameworks, SPI peripheral clock configurations, and UART asynchronous serial buffers." },
      { title: "Module 2: Register & Signal Logic", desc: "Bit shifting raw communications, reading state registers, and configuring hardware sample weights." },
      { title: "Module 3: Linear Signal Filtering", desc: "Mitigating raw measurement jitter, implementing basic rolling moving average lines, and state data filtering models." },
      { title: "Module 4: Multi-Bus Aggregations", desc: "Constructing multi-device reading maps, state verification routines, and continuous data printing metrics." }
    ]
  },
  {
    id: "combo",
    title: "The Ultimate Combo",
    price: 5999,
    tagline: "Our flagship bundle uniting Robotics mechanisms, Sensors data structures, and custom PCB hardware design.",
    hardwareRequired: "Comprehensive Hardware Kit Included",
    modules: [
      { title: "Phase 1: Architecture", desc: "Design a custom sensor shield schematic, select layout parts, and route motor connection lines." },
      { title: "Phase 2: Assembly & Interfaces", desc: "Assemble custom physical circuit units, interface I2C telemetry buses, and eliminate electrical signal noise." },
      { title: "Phase 3: Automation & Execution", desc: "Program automated feedback structures, clean sensor feeds, and execute path routing routines." }
    ]
  }
];