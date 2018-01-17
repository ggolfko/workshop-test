const CronJob = require('cron').CronJob

let cronTab = function () {
    this.jobs = {}
}

cronTab.prototype.add = function (job) {
    if (this.jobs[job._id]) return false
    let cron = new CronJob('* * * * * *', function () {
        // FIXME: use a different process for the jobs
        console.log('============')
    }, null, false)
    cron.start()
    this.jobs[job._id] = cron
    console.log('Status %s', job._id, this.jobs[job._id].running)
    return true
}

cronTab.prototype.remove = function (job) {
    if (!this.jobs[job._id]) return false
    this.jobs[job._id].stop()
    console.log('Status %s', job._id, this.jobs[job._id].running)
    delete this.jobs[job._id]
    return true
}

cronTab.prototype.update = function (job) {
    return this.removeJob(job) && this.addJob(job)
}

cronTab.prototype.togglePause = function (job) {
    if (!this.jobs[job._id]) return false
    if (this.jobs[job._id].running) {
        this.jobs[job._id].stop()
        console.log('Status %s', job._id, this.jobs[job._id].running)
    } else {
        this.jobs[job._id].start()
        console.log('Status %s', job._id, this.jobs[job._id].running)
    }
    return true
}

cronTab.prototype.removeAll = function () {
    let nbJobs = 0
    for (id in this.jobs) {
        if (!this.remove(this.jobs[id])) return false
        nbJobs++
    }
    return nbJobs
}

module.exports = new cronTab()