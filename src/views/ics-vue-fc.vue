<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <full-calendar class="test-fc" :events="fcEvents" 
                    first-day='0' lang="zh"
                    @changeMonth="changeMonth"
                    @eventClick="eventClick"
                    @dayClick="dayClick"
                    @moreClick="moreClick">
                    <template slot="fc-event-card" scope="p">
                        <p><i class="fa">sadfsd</i> {{ p.event.title }} test</p>
                    </template>
                </full-calendar>
            </Col>
        </Row>
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        data () {
            return {
                'fcEvents':[],
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
                    console.log(resp.data.ret_data[i])
                    var obj = new Object();
                    obj['title'] = i
                    obj['start'] = new Date()
                    obj['end'] = new Date()
                    matches.push(obj)
                }
                this.fcEvents = matches
            },
            changeMonth (start, end, current) {
                console.log('changeMonth')
            },
            eventClick (event, jsEvent, pos) {
                console.log('eventClick', event, jsEvent, pos)
            },
            dayClick (day, jsEvent) {
                console.log('dayClick', day, jsEvent)
            },
            moreClick (day, events, jsEvent) {
                console.log('moreCLick', day, events, jsEvent)
            }
        },
        components: {
            'full-calendar': require('vue-fullcalendar')
        },
    }
</script>
