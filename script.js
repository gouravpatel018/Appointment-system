function checkAvailability() {
    var studentName = document.getElementById('studentName').value;
    var appointmentTime = new Date(document.getElementById('appointmentTime').value);
    var doubt = document.getElementById('doubt').value;

    // Assuming we have some predefined teacher availability schedule
    var teacherAvailability = [
        { name: 'Kanak Saxena Mam', available: true },
        { name: 'Sunil Joshi Sir', available: false, nextAvailable: new Date('2024-03-22T10:00:00') }
        // Add more teachers with their availability
    ];

    var availableTeacher = teacherAvailability.find(function (teacher) {
        return teacher.available || (teacher.nextAvailable && appointmentTime >= teacher.nextAvailable);
    });

    if (availableTeacher) {
        document.getElementById('availabilityMessage').innerHTML = `Teacher ${availableTeacher.name} is available. Your appointment is scheduled for ${appointmentTime}.`;
    } else {
        document.getElementById('availabilityMessage').innerHTML = 'No teacher is available at this time. Please choose another time.';
    }
}
