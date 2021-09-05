<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <FullCalendar :options="calendarOptions" />
            </Col>
        </Row>
    </div>
</template>
<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'
import iCalendarPlugin from '@fullcalendar/icalendar'
import axios from 'axios'
    export default {
        data () {
            return {
                calendarOptions: {
                    plugins: [ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, iCalendarPlugin ],
                    initialView: 'dayGridWeek',
                    events: [],
                    timeZone: 'local',
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridWeek, dayGridDay, listWeek, listDay'
                    },
                    locale : 'zh',
                    firstDay: (new Date()).getDay(),
                    eventTimeFormat: { // like '14:30:00'
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                    },
                    displayEventTime: true,
                    displayEventEnd : true,
                }
            }
        },
        created () {
            console.log('created')
            this.loadEvents()
        },
        methods: {
            loadEvents () {
                console.log('loadEvents')
                let matches = []
                for(var i=0;i<10;i++){
                    console.log(i)
                    var obj = new Object()
                    obj['id'] = i
                    obj['title'] = i
                    obj['start'] = new Date()
                    obj['end'] = new Date()
                    obj['url'] = ''
                    matches.push(obj)
                }
                this.calendarOptions.events = matches
            },
        },
        components: {
            FullCalendar // make the <FullCalendar> tag available
        },
    }
</script>
