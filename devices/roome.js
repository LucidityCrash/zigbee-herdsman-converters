const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const e = exposes.presets;

module.exports = [
    {
        zigbeeModel: ['MULTI-MECI--EA01'],
        model: 'HSC1-WD-0',
        vendor: 'ROOME',
        description: 'Door or window contact switch',
        fromZigbee: [fz.ias_contact_alarm_1, fz.battery, fz.ignore_iaszone_attreport],
        toZigbee: [],
        exposes: [e.contact(), e.battery_low(), e.tamper()],
    },
];
