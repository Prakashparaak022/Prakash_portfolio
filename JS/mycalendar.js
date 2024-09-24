$('#calendar').evoCalendar({
    theme: 'Orange Coral',
    todayHighlight: true,
    sidebarDisplayDefault: false,
    calendarEvents: [
        {
            id: 'event1',
            name: 'Availability',
            date: ["June/3/2023", "June/4/2023"],
            type: 'holiday',
            description: 'Available from 10 AM to 5 PM',
        },
        {
            name: 'Project review',
            date: '2023-05-30',
            description: 'Phase II project review',
            type: 'event',
            color: '#63d867',
        },
        {
            name: 'My Birthday',
            date: '2023-03-23',
            description: "It's my Birthday",
            type: 'birthday',
            color: '#63d867',
            everyYear: true
        }
    ],
});

