<script setup>
import { useRegisterSW } from "virtual:pwa-register/vue";

const timer = ref(60); // 60 Seconds to update automatically
const runAutomaticUpdate = ref(null);
const runCheckRegistration = ref(null);

function stopAutomaticUpdate() {
  console.log("sw: stop automatic update");
  if (!runAutomaticUpdate.value) return;
  clearInterval(runAutomaticUpdate.value);
}

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: true,
  onRegisteredSW(swUrl, r) {
    console.log(`Service Worker Prompt 2 at: ${swUrl}`);

    if (needRefresh.value) {
      startAutomaticUpdate();
    }

    runCheckRegistration.value = setInterval(async () => {
      await r.update();
    }, 60000 /* 60s */);
  },
});

function startAutomaticUpdate() {
  runAutomaticUpdate.value = setInterval(() => {
    timer.value--;
    if (timer.value === 0) {
      stopAutomaticUpdate();
      updateServiceWorker();
      console.log("update service worker");
    }
  }, 1000);
}

watch(needRefresh, async (newValue) => {
  if (
    newValue === true &&
    runAutomaticUpdate.value === null &&
    runCheckRegistration.value !== null
  ) {
    clearInterval(runCheckRegistration.value);
    startAutomaticUpdate();
  }
});

async function close() {
  offlineReady.value = false;
  needRefresh.value = false;
  stopAutomaticUpdate();
}
</script>

<template>
  <div
    v-if="needRefresh"
    class="pointer-events-none fixed bottom-0 right-0 z-50 flex h-fit w-full justify-end p-4 font-serif"
    role="alert"
  >
    <div
      class="pointer-events-auto w-full max-w-[480px] rounded-lg border border-gray-200 bg-white px-5 py-3 shadow"
    >
      <div class="mb-3 text-gray-900">
        New content available, click on reload button to update. Or wait
        <strong class="font-bold">{{ timer }}</strong> seconds to update
        automatically.
      </div>
      <div class="flex items-center justify-end gap-3">
        <button @click="close">Close</button>
        <button @click="updateServiceWorker()">Reload</button>
      </div>
    </div>
  </div>
</template>
