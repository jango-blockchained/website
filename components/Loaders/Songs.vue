<template>
  <main class="space-y-20">
    <div>
      <PageTitle class="mb-4">Details</PageTitle>

      <div class="grid gap-x-0 gap-y-4 md:gap-x-12 md:grid-cols-2">
        <div class="flex space-x-4 items-center">
          <span>Profile</span>

          <div class="flex space-x-2 w-full justify-end items-center">
            <SkeletonLoader class="h-5 w-1/2" />
            <SkeletonLoader class="h-6 w-6 !rounded-full" />
          </div>
        </div>

        <!-- Play count -->
        <div class="flex space-x-4 items-center justify-between">
          <span class="flex-shrink-0">Total Plays</span>

          <div class="flex space-x-2 w-full justify-end items-center">
            <SkeletonLoader class="h-5 w-1/3" />
            <SkeletonLoader class="h-6 w-6 !rounded-full" />
          </div>
        </div>

        <!-- Registered -->
        <div class="flex space-x-4 items-center justify-between">
          <span class="flex-shrink-0">Account Age</span>

          <div class="flex space-x-2 w-full justify-end items-center">
            <SkeletonLoader class="h-5 w-1/4" />
            <SkeletonLoader class="h-6 w-6 !rounded-full" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <PageTitle class="mb-4">Top Songs (last 7 days)</PageTitle>

      <div class="grid gap-2 md:grid-cols-2">
        <SkeletonLoader
          v-for="i in 6"
          :key="`topsongs-${i}`"
          class="h-16 w-full"
        />
      </div>
    </div>

    <div>
      <PageTitle class="mb-4">Top Artists (last 7 days)</PageTitle>

      <div class="grid gap-2 md:grid-cols-2">
        <SkeletonLoader
          v-for="i in 4"
          ::key="`topartists-${i}`"
          class="h-12 w-full"
        />
      </div>
    </div>

    <div>
      <PageTitle class="mb-4">Recent Songs</PageTitle>

      <div class="grid gap-2 md:grid-cols-2">
        <SkeletonLoader
          v-for="i in 15"
          :key="`recentsongs-${i}`"
          type="lastfm"
        />
      </div>
    </div>
  </main>
</template>
