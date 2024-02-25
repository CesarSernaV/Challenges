function executeCommands(commands) {
  const registers = { 
    V00: 0, V01: 0, V02: 0, 
    V03: 0, V04: 0, V05: 0,
    V06: 0, V07: 0 
  };
  const instructions = {
    MOV: (x, y) => {
      registers[y] = isNaN(x) ? registers[x] : +x;
    },
    ADD: (x, y) => {
      registers[x] += registers[y];
    },
    DEC: (x) => {
      registers[x] = registers[x] === 0 ? 255 : registers[x] - 1
    },
    INC: (x) => {
      registers[x] = registers[x] === 255 ? 0 : registers[x] + 1
    },
    JMP: (x) => {
      if (registers['V00'] !== 0) {
        return +x - 1;
      }
    },
  }

  let countCommands = commands.length
  for (let i = 0; i < countCommands; i++) {
    const [inst, x, y] = commands[i].split(/[ ,]+/)
    const nextIndex = instructions[inst](x, y)
    if (nextIndex !== undefined) {
      i = nextIndex
    }
  }
  return Object.values(registers)
}