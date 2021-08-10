interface ISortStrategy {
  sort(dataset: Array<number>): Array<number>;
}

class BubbleSortStrategy implements ISortStrategy {
  sort(dataset: Array<number>) {
    console.log("Sorting using bubble sort");
    return dataset;
  }
}

class QuickSortStrategy implements ISortStrategy {
  sort(dataset: Array<number>) {
    console.log("Sorting using quick sort");
    return dataset;
  }
}

class Sorter {
  constructor(protected sorter: ISortStrategy) {
    this.sorter = sorter;
  }
  sort(dataset: Array<number>) {
    return this.sorter.sort(dataset);
  }
}

export default function sampleStrategy() {
  const dataset = [1, 5, 4, 3, 2, 8];
  let sorter = new Sorter(new BubbleSortStrategy());
  sorter.sort(dataset);
  sorter = new Sorter(new QuickSortStrategy());
  sorter.sort(dataset);
}
