function createDataDepartment(name, waiting, inAttendance, finalized, waitingTime, attendanceTime) {
  return {
    name, waiting, inAttendance, finalized, waitingTime, attendanceTime,
  };
}

const rowsDepartment = [
  createDataDepartment('Marketing', 159, 6.0, 24, '0:10:00', '0:05:00'),
  createDataDepartment('Comercial', 237, 9.0, 37, '0:10:00', '0:05:00'),
  createDataDepartment('Ouvidoria', 262, 16.0, 24, '0:10:00', '0:05:00'),
  createDataDepartment('Social', 305, 3.7, 67, '0:10:00', '0:05:00'),
];

function createDataAgent(name, waiting, inAttendance, finalized, waitingTime, attendanceTime) {
  return {
    name, waiting, inAttendance, finalized, waitingTime, attendanceTime,
  };
}

const rowsAgent = [
  createDataAgent('Dangelo', 159, 6.0, 24, '0:10:00', '0:05:00'),
  createDataAgent('Diamonique', 237, 9.0, 37, '0:10:00', '0:05:00'),
  createDataAgent('Zander', 262, 16.0, 24, '0:10:00', '0:05:00'),
  createDataAgent('Arlo', 305, 3.7, 67, '0:10:00', '0:05:00'),
];

export { rowsDepartment, rowsAgent };
