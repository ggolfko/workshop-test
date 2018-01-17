const CronTab = require('./cron-tab')


class Job {
  constructor(name, _id) {
    this.name = name
    this._id = _id

  }
}

let job1 = new Job('A', '321')
let job2 = new Job('B', '123')


CronTab.add(job1)
CronTab.add(job2)
CronTab.togglePause(job1)
CronTab.togglePause(job1)
CronTab.removeAll()
// CronTab.remove(job2)
// CronTab.remove(job1)