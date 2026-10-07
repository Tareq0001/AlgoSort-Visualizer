/**
 * AlgoSort Visualizer - Interactive Sorting Algorithm Simulator
 * Developer: Tareq Aboushi (Tareq0001)
 */

// --- Localization Strings ---
const i18nData = {
  ar: {
    appTitle: "AlgoSort Visualizer",
    appSubtitle: "محاكي بصري تفاعلي لخوارزميات الترتيب والتعقيد الحسابي",
    soundLabel: "الصوت",
    algoBubble: "ترتيب الفقاعة (Bubble)",
    algoSelection: "ترتيب الاختيار (Selection)",
    algoInsertion: "ترتيب الإدراج (Insertion)",
    algoQuick: "الترتيب السريع (Quick)",
    algoMerge: "ترتيب الدمج (Merge)",
    btnStart: "بدء الترتيب",
    btnPause: "إيقاف مؤقت",
    btnResume: "استئناف",
    btnStep: "خطوة",
    btnReset: "إعادة تعيين",
    lblSize: "حجم المصفوفة:",
    lblSpeed: "السرعة:",
    lblPattern: "النمط الابتدائي:",
    patternRandom: "عشوائي تماماً",
    patternNearly: "شبه مرتب",
    patternReversed: "معكوس تنازلياً",
    patternFewUnique: "قيم مكررة قليلة",
    metricComparisons: "المقارنات",
    metricSwaps: "التبديلات / الإزاحة",
    metricTime: "الوقت المستغرق",
    metricStatus: "الحالة",
    statusReady: "جاهز للبدء",
    statusSorting: "جارِ الفرز...",
    statusPaused: "متوقف مؤقتاً",
    statusDone: "اكتمل الترتيب بنجاح! 🎉",
    legDefault: "عنصر عادي",
    legCompare: "مقارنة فاحصة",
    legSwap: "تبديل / كتابة",
    legSorted: "مكتمل ومستقر",
    yes: "نعم",
    no: "لا"
  },
  en: {
    appTitle: "AlgoSort Visualizer",
    appSubtitle: "Interactive Visual Simulator for Sorting Algorithms & Computational Complexity",
    soundLabel: "Sound",
    algoBubble: "Bubble Sort",
    algoSelection: "Selection Sort",
    algoInsertion: "Insertion Sort",
    algoQuick: "Quick Sort",
    algoMerge: "Merge Sort",
    btnStart: "Start Sort",
    btnPause: "Pause",
    btnResume: "Resume",
    btnStep: "Step",
    btnReset: "Reset Array",
    lblSize: "Array Size:",
    lblSpeed: "Delay:",
    lblPattern: "Initial Pattern:",
    patternRandom: "Completely Random",
    patternNearly: "Nearly Sorted",
    patternReversed: "Reversed (Descending)",
    patternFewUnique: "Few Unique Elements",
    metricComparisons: "Comparisons",
    metricSwaps: "Swaps / Overwrites",
    metricTime: "Elapsed Time",
    metricStatus: "Status",
    statusReady: "Ready to Start",
    statusSorting: "Sorting in Progress...",
    statusPaused: "Paused",
    statusDone: "Sorted Successfully! 🎉",
    legDefault: "Default Element",
    legCompare: "Comparing",
    legSwap: "Swap / Overwrite",
    legSorted: "Sorted & Stable",
    yes: "Yes",
    no: "No"
  }
};

const algoMeta = {
  bubble: {
    titleAr: "ترتيب الفقاعة (Bubble Sort)",
    titleEn: "Bubble Sort",
    descAr: "خوارزمية بسيطة تقارن كل عنصرين متجاورين وتبدلهما إذا كانا بالترتيب الخاطئ. تتكرر العملية حتى تطفو العناصر الكبرى إلى النهاية كالفقاعة.",
    descEn: "A simple comparison algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
    best: "O(n)",
    avg: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: true
  },
  selection: {
    titleAr: "ترتيب الاختيار (Selection Sort)",
    titleEn: "Selection Sort",
    descAr: "تقسم المصفوفة إلى جزأين: مرتب وغير مرتب. تبحث في كل دورة عن أصغر عنصر في الجزء غير المرتب وتضعه في بداية الجزء المرتب.",
    descEn: "Divides the array into sorted and unsorted subarrays. In each pass, it finds the smallest element from the unsorted part and places it at the end of the sorted part.",
    best: "O(n²)",
    avg: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: false
  },
  insertion: {
    titleAr: "ترتيب الإدراج (Insertion Sort)",
    titleEn: "Insertion Sort",
    descAr: "تبني المصفوفة المرتبة عنصراً تلو الآخر. تأخذ كل عنصر جديد وتدرجه في موضعه الصحيح ضمن العناصر التي سبق ترتيبها.",
    descEn: "Builds the sorted array one item at a time. It takes each new element and inserts it into its correct position relative to the already sorted elements.",
    best: "O(n)",
    avg: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: true
  },
  quick: {
    titleAr: "الترتيب السريع (Quick Sort)",
    titleEn: "Quick Sort",
    descAr: "خوارزمية تعتمد مبدأ (فرق تسد). تختار عنصراً محورياً (Pivot) وتقسم المصفوفة إلى عناصر أصغر منه وأكبر منه، ثم ترتب الأقسام عودياً.",
    descEn: "A divide-and-conquer algorithm. It selects a 'pivot' element and partitions the array into sub-arrays of elements less than and greater than the pivot.",
    best: "O(n log n)",
    avg: "O(n log n)",
    worst: "O(n²)",
    space: "O(log n)",
    stable: false
  },
  merge: {
    titleAr: "ترتيب الدمج (Merge Sort)",
    titleEn: "Merge Sort",
    descAr: "خوارزمية فعالة جداً تعتمد مبدأ (فرق تسد). تقسم المصفوفة بالتساوي إلى نصفين حتى تصبح عناصر منفردة، ثم تعيد دمجها بشكل مرتب.",
    descEn: "An efficient divide-and-conquer algorithm. It splits the array in half recursively until single elements remain, then merges them back in sorted order.",
    best: "O(n log n)",
    avg: "O(n log n)",
    worst: "O(n log n)",
    space: "O(n)",
    stable: true
  }
};

// --- State Variables ---
let currentLang = "ar";
let currentAlgo = "bubble";
let array = [];
let arraySize = 35;
let delayMs = 50;
let isSorting = false;
let isPaused = false;
let comparisons = 0;
let swaps = 0;
let startTime = null;
let timerInterval = null;
let soundEnabled = true;
let audioCtx = null;
let sortGenerator = null;

// --- DOM Elements ---
const barsContainer = document.getElementById("barsContainer");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stepBtn = document.getElementById("stepBtn");
const resetBtn = document.getElementById("resetBtn");
const arraySizeInput = document.getElementById("arraySize");
const sizeValueSpan = document.getElementById("sizeValue");
const speedRange = document.getElementById("speedRange");
const speedValueSpan = document.getElementById("speedValue");
const patternSelect = document.getElementById("patternSelect");
const comparisonsCounter = document.getElementById("comparisonsCounter");
const swapsCounter = document.getElementById("swapsCounter");
const timerDisplay = document.getElementById("timerDisplay");
const statusIndicator = document.getElementById("statusIndicator");
const langToggleBtn = document.getElementById("langToggleBtn");
const soundToggleBtn = document.getElementById("soundToggleBtn");
const soundIcon = document.getElementById("soundIcon");
const algoTabs = document.getElementById("algoTabs");

// Info card elements
const infoTitle = document.getElementById("infoTitle");
const infoDesc = document.getElementById("infoDesc");
const specBest = document.getElementById("specBest");
const specAvg = document.getElementById("specAvg");
const specWorst = document.getElementById("specWorst");
const specSpace = document.getElementById("specSpace");
const specStable = document.getElementById("specStable");

// --- Audio Synthesizer ---
function initAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
}

function playTone(val, maxVal = 100) {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx || audioCtx.state === 'suspended') {
      audioCtx?.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    // Map value to frequency 180Hz - 900Hz
    const freq = 180 + (val / maxVal) * 720;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.type = "triangle";

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
  } catch (e) {
    // Audio context may be restricted before user gesture
  }
}

// --- Array Generation ---
function generateArray() {
  stopSorting();
  array = [];
  const pattern = patternSelect.value;
  const size = parseInt(arraySizeInput.value, 10);

  if (pattern === "random") {
    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * 95) + 5);
    }
  } else if (pattern === "nearlySorted") {
    for (let i = 0; i < size; i++) {
      array.push(Math.floor((i + 1) * (100 / size)));
    }
    // Swap 2 to 4 pairs
    const swapsCount = Math.max(2, Math.floor(size * 0.08));
    for (let s = 0; s < swapsCount; s++) {
      const i1 = Math.floor(Math.random() * size);
      const i2 = Math.floor(Math.random() * size);
      [array[i1], array[i2]] = [array[i2], array[i1]];
    }
  } else if (pattern === "reversed") {
    for (let i = size; i >= 1; i--) {
      array.push(Math.floor(i * (100 / size)));
    }
  } else if (pattern === "fewUnique") {
    const uniquePool = [15, 38, 62, 85, 95];
    for (let i = 0; i < size; i++) {
      const idx = Math.floor(Math.random() * uniquePool.length);
      array.push(uniquePool[idx]);
    }
  }

  renderBars();
  resetMetrics();
  updateStatus(i18nData[currentLang].statusReady);
}

function renderBars() {
  barsContainer.innerHTML = "";
  if (array.length <= 40) {
    barsContainer.classList.add("show-labels");
  } else {
    barsContainer.classList.remove("show-labels");
  }

  array.forEach((val, index) => {
    const bar = document.createElement("div");
    bar.className = "array-bar";
    bar.style.height = `${val}%`;
    bar.id = `bar-${index}`;

    const label = document.createElement("span");
    label.className = "bar-label";
    label.textContent = val;
    bar.appendChild(label);

    barsContainer.appendChild(bar);
  });
}

function updateBarHeight(index, val) {
  const bar = document.getElementById(`bar-${index}`);
  if (bar) {
    bar.style.height = `${val}%`;
    const label = bar.querySelector(".bar-label");
    if (label) label.textContent = val;
  }
}

function setBarState(indices, state) {
  indices.forEach(idx => {
    const bar = document.getElementById(`bar-${idx}`);
    if (bar) {
      if (state) {
        bar.classList.add(state);
      } else {
        bar.className = "array-bar";
      }
    }
  });
}

function clearAllStates() {
  const bars = barsContainer.querySelectorAll(".array-bar");
  bars.forEach(bar => {
    bar.className = "array-bar";
  });
}

// --- Metrics & Timer ---
function resetMetrics() {
  comparisons = 0;
  swaps = 0;
  comparisonsCounter.textContent = "0";
  swapsCounter.textContent = "0";
  clearInterval(timerInterval);
  timerDisplay.textContent = "0.00s";
}

function startTimer() {
  startTime = performance.now();
  timerInterval = setInterval(() => {
    const elapsed = (performance.now() - startTime) / 1000;
    timerDisplay.textContent = `${elapsed.toFixed(2)}s`;
  }, 50);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateStatus(text) {
  statusIndicator.textContent = text;
}

// --- Sorting Algorithms (Generators for step-by-step control) ---

// 1. Bubble Sort
function* bubbleSortGen() {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      yield { type: "compare", indices: [j, j + 1] };
      comparisons++;
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swaps++;
        yield { type: "swap", indices: [j, j + 1], values: [array[j], array[j + 1]] };
      }
      yield { type: "clear", indices: [j, j + 1] };
    }
    yield { type: "sorted", indices: [n - 1 - i] };
  }
  yield { type: "sorted", indices: [0] };
}

// 2. Selection Sort
function* selectionSortGen() {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    yield { type: "pivot", indices: [minIdx] };

    for (let j = i + 1; j < n; j++) {
      yield { type: "compare", indices: [minIdx, j] };
      comparisons++;
      if (array[j] < array[minIdx]) {
        yield { type: "clear", indices: [minIdx] };
        minIdx = j;
        yield { type: "pivot", indices: [minIdx] };
      } else {
        yield { type: "clear", indices: [j] };
      }
    }

    if (minIdx !== i) {
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
      swaps++;
      yield { type: "swap", indices: [i, minIdx], values: [array[i], array[minIdx]] };
    }
    yield { type: "sorted", indices: [i] };
    yield { type: "clear", indices: [minIdx] };
  }
}

// 3. Insertion Sort
function* insertionSortGen() {
  const n = array.length;
  yield { type: "sorted", indices: [0] };

  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;
    yield { type: "pivot", indices: [i] };

    while (j >= 0) {
      comparisons++;
      yield { type: "compare", indices: [j, j + 1] };
      if (array[j] > key) {
        array[j + 1] = array[j];
        swaps++;
        yield { type: "overwrite", index: j + 1, value: array[j] };
        yield { type: "clear", indices: [j, j + 1] };
        j--;
      } else {
        yield { type: "clear", indices: [j, j + 1] };
        break;
      }
    }
    array[j + 1] = key;
    yield { type: "overwrite", index: j + 1, value: key };
    for (let k = 0; k <= i; k++) {
      yield { type: "sorted", indices: [k] };
    }
  }
}

// 4. Quick Sort
function* quickSortGen() {
  function* partition(low, high) {
    const pivot = array[high];
    yield { type: "pivot", indices: [high] };
    let i = low - 1;

    for (let j = low; j < high; j++) {
      comparisons++;
      yield { type: "compare", indices: [j, high] };
      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        swaps++;
        yield { type: "swap", indices: [i, j], values: [array[i], array[j]] };
        yield { type: "clear", indices: [i, j] };
      } else {
        yield { type: "clear", indices: [j] };
      }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    swaps++;
    yield { type: "swap", indices: [i + 1, high], values: [array[i + 1], array[high]] };
    yield { type: "sorted", indices: [i + 1] };
    yield { type: "clear", indices: [high] };
    return i + 1;
  }

  function* qs(low, high) {
    if (low <= high) {
      const piGen = partition(low, high);
      let step = piGen.next();
      while (!step.done) {
        yield step.value;
        step = piGen.next();
      }
      const pi = step.value;
      yield* qs(low, pi - 1);
      yield* qs(pi + 1, high);
    }
  }

  yield* qs(0, array.length - 1);
  for (let k = 0; k < array.length; k++) {
    yield { type: "sorted", indices: [k] };
  }
}

// 5. Merge Sort
function* mergeSortGen() {
  function* merge(start, mid, end) {
    const left = array.slice(start, mid + 1);
    const right = array.slice(mid + 1, end + 1);
    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
      comparisons++;
      yield { type: "compare", indices: [start + i, mid + 1 + j] };
      if (left[i] <= right[j]) {
        array[k] = left[i];
        swaps++;
        yield { type: "overwrite", index: k, value: left[i] };
        i++;
      } else {
        array[k] = right[j];
        swaps++;
        yield { type: "overwrite", index: k, value: right[j] };
        j++;
      }
      yield { type: "clear", indices: [start + i, mid + 1 + j] };
      k++;
    }

    while (i < left.length) {
      array[k] = left[i];
      swaps++;
      yield { type: "overwrite", index: k, value: left[i] };
      i++;
      k++;
    }

    while (j < right.length) {
      array[k] = right[j];
      swaps++;
      yield { type: "overwrite", index: k, value: right[j] };
      j++;
      k++;
    }

    for (let idx = start; idx <= end; idx++) {
      yield { type: "sorted", indices: [idx] };
    }
  }

  function* ms(start, end) {
    if (start < end) {
      const mid = Math.floor((start + end) / 2);
      yield* ms(start, mid);
      yield* ms(mid + 1, end);
      yield* merge(start, mid, end);
    }
  }

  yield* ms(0, array.length - 1);
}

// --- Execution Controller ---
function getGeneratorForAlgo(name) {
  switch (name) {
    case "bubble": return bubbleSortGen();
    case "selection": return selectionSortGen();
    case "insertion": return insertionSortGen();
    case "quick": return quickSortGen();
    case "merge": return mergeSortGen();
    default: return bubbleSortGen();
  }
}

function processStep(stepObj) {
  if (!stepObj) return;
  const { type, indices, values, index, value } = stepObj;

  if (type === "compare") {
    setBarState(indices, "comparing");
    if (indices && indices[0] !== undefined) {
      playTone(array[indices[0]]);
    }
  } else if (type === "swap") {
    setBarState(indices, "swapping");
    if (indices && values) {
      updateBarHeight(indices[0], values[0]);
      updateBarHeight(indices[1], values[1]);
      playTone(values[0]);
    }
  } else if (type === "overwrite") {
    setBarState([index], "swapping");
    updateBarHeight(index, value);
    playTone(value);
  } else if (type === "pivot") {
    setBarState(indices, "pivot");
  } else if (type === "sorted") {
    setBarState(indices, "sorted");
  } else if (type === "clear") {
    setBarState(indices, null);
  }

  comparisonsCounter.textContent = comparisons;
  swapsCounter.textContent = swaps;
}

async function runSortingLoop() {
  while (isSorting && !isPaused) {
    const nextItem = sortGenerator.next();
    if (nextItem.done) {
      finishSorting();
      break;
    }
    processStep(nextItem.value);
    await new Promise(resolve => setTimeout(resolve, delayMs));
  }
}

function startSorting() {
  if (isPaused) {
    isPaused = false;
    updateStatus(i18nData[currentLang].statusSorting);
    playBtn.disabled = true;
    pauseBtn.disabled = false;
    runSortingLoop();
    return;
  }

  isSorting = true;
  isPaused = false;
  resetMetrics();
  clearAllStates();
  startTimer();
  sortGenerator = getGeneratorForAlgo(currentAlgo);
  updateStatus(i18nData[currentLang].statusSorting);

  playBtn.disabled = true;
  pauseBtn.disabled = false;
  stepBtn.disabled = true;
  arraySizeInput.disabled = true;
  patternSelect.disabled = true;

  runSortingLoop();
}

function pauseSorting() {
  if (!isSorting || isPaused) return;
  isPaused = true;
  updateStatus(i18nData[currentLang].statusPaused);
  playBtn.disabled = false;
  document.getElementById("playLabel").textContent = i18nData[currentLang].btnResume;
  pauseBtn.disabled = true;
  stepBtn.disabled = false;
}

function stepSorting() {
  if (!isSorting) {
    isSorting = true;
    isPaused = true;
    resetMetrics();
    clearAllStates();
    startTimer();
    sortGenerator = getGeneratorForAlgo(currentAlgo);
    updateStatus(i18nData[currentLang].statusPaused);
    document.getElementById("playLabel").textContent = i18nData[currentLang].btnResume;
    pauseBtn.disabled = true;
    arraySizeInput.disabled = true;
    patternSelect.disabled = true;
  }

  const nextItem = sortGenerator.next();
  if (nextItem.done) {
    finishSorting();
  } else {
    processStep(nextItem.value);
  }
}

function finishSorting() {
  isSorting = false;
  isPaused = false;
  stopTimer();
  clearAllStates();

  // Celebration wave
  const bars = barsContainer.querySelectorAll(".array-bar");
  bars.forEach((b, i) => {
    setTimeout(() => {
      b.classList.add("sorted");
      playTone(array[i] || 50);
    }, i * 15);
  });

  updateStatus(i18nData[currentLang].statusDone);
  playBtn.disabled = false;
  document.getElementById("playLabel").textContent = i18nData[currentLang].btnStart;
  pauseBtn.disabled = true;
  stepBtn.disabled = false;
  arraySizeInput.disabled = false;
  patternSelect.disabled = false;
}

function stopSorting() {
  isSorting = false;
  isPaused = false;
  stopTimer();
  sortGenerator = null;
  clearAllStates();

  playBtn.disabled = false;
  document.getElementById("playLabel").textContent = i18nData[currentLang].btnStart;
  pauseBtn.disabled = true;
  stepBtn.disabled = false;
  arraySizeInput.disabled = false;
  patternSelect.disabled = false;
}

// --- Info Card Update ---
function updateInfoCard() {
  const meta = algoMeta[currentAlgo];
  const lang = currentLang;

  infoTitle.textContent = lang === "ar" ? meta.titleAr : meta.titleEn;
  infoDesc.textContent = lang === "ar" ? meta.descAr : meta.descEn;
  specBest.textContent = meta.best;
  specAvg.textContent = meta.avg;
  specWorst.textContent = meta.worst;
  specSpace.textContent = meta.space;
  specStable.textContent = meta.stable ? i18nData[lang].yes : i18nData[lang].no;
}

// --- Localization Switching ---
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // Update elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18nData[lang][key]) {
      el.textContent = i18nData[lang][key];
    }
  });

  document.getElementById("langText").textContent = lang === "ar" ? "English" : "العربية";
  updateInfoCard();
}

// --- Event Listeners ---
playBtn.addEventListener("click", startSorting);
pauseBtn.addEventListener("click", pauseSorting);
stepBtn.addEventListener("click", stepSorting);
resetBtn.addEventListener("click", () => {
  generateArray();
});

arraySizeInput.addEventListener("input", (e) => {
  sizeValueSpan.textContent = e.target.value;
  generateArray();
});

speedRange.addEventListener("input", (e) => {
  delayMs = parseInt(e.target.value, 10);
  speedValueSpan.textContent = `${delayMs} ms`;
});

patternSelect.addEventListener("change", () => {
  generateArray();
});

soundToggleBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundIcon.textContent = soundEnabled ? "🔊" : "🔇";
  soundToggleBtn.style.opacity = soundEnabled ? "1" : "0.6";
});

langToggleBtn.addEventListener("click", () => {
  setLanguage(currentLang === "ar" ? "en" : "ar");
});

algoTabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".algo-tab");
  if (!tab) return;
  if (isSorting) stopSorting();

  algoTabs.querySelectorAll(".algo-tab").forEach(t => t.classList.remove("active"));
  tab.classList.add("active");
  currentAlgo = tab.getAttribute("data-algo");
  updateInfoCard();
});

// Initialize on Load
window.addEventListener("DOMContentLoaded", () => {
  generateArray();
  updateInfoCard();
});
