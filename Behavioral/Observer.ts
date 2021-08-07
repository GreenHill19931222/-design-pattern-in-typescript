class JobPost {
  constructor(protected title: string) {
    this.title = title;
  }
  getTitle = () => this.title;
}
//Observer
interface IJobseeker {
  onJobPosted(job: JobPost): void;
}
class JobSeeker implements IJobseeker {
  constructor(protected name: string) {
    this.name = name;
  }
  onJobPosted = (job: JobPost) => {
    console.log(`Hi ${this.name}!New job posted: ${job.getTitle()}`);
  };
}
// Observable
interface IJobPostings {
  notify(jobPosting: JobPost): void;
  attach(jobSeeker: JobSeeker): void;
  addJob(jobPosting: JobPost): void;
}

class JobPosting implements IJobPostings {
  protected observers = Array<IJobseeker>();
  notify(jobPosting: JobPost) {
    this.observers.forEach((observer) => observer.onJobPosted(jobPosting));
  }
  attach = (jobSeeker: JobSeeker) => this.observers.push(jobSeeker);
  addJob = (jobPosting: JobPost) => this.notify(jobPosting);
}

export default function sampleObserver() {
  // Create subscribers
  const johnDoe = new JobSeeker("John Doe");
  const janeDoe = new JobSeeker("Jane Doe");
  // Create publisher and attach subscribers
  const jobPosting = new JobPosting();
  jobPosting.attach(johnDoe);
  jobPosting.attach(janeDoe);
  // Add a new job and see if subscribers get notified
  jobPosting.addJob(new JobPost("Software Engineer"));
  
}
