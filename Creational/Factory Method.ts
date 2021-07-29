interface IInterviewer {
  askQuestion(): void;
}

class Developer implements IInterviewer {
  askQuestion(): void {
    console.log("Asking about design patterns!");
  }
}

class CommunityExecutive implements IInterviewer {
  askQuestion(): void {
    console.log("Asking about community building");
  }
}

abstract class HiringManager {
  abstract makeInterviewer(): IInterviewer;
  takeInterview() {
    let interviewer = this.makeInterviewer();
    interviewer.askQuestion();
  }
}

class DevelopmentManager extends HiringManager {
    makeInterviewer(): IInterviewer {
        return new Developer();
    }
}

class MarketingManager extends HiringManager {
    makeInterviewer() : IInterviewer {
        return new CommunityExecutive();
    }
}

export default function factotyMethodSample () {
    let devManager = new DevelopmentManager();
    devManager.takeInterview();

    let marketingManager = new MarketingManager();
    marketingManager.takeInterview();
}
