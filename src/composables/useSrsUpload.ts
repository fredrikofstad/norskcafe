import { onBeforeRouteLeave } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'

export function useSrsUpload(getReviewData: () => any) {
    let hasUploaded = false

    async function uploadSRSUpdates() {
        if (hasUploaded) return
        hasUploaded = true

        const data = getReviewData()
        if (!data || data.length === 0) return

        try {
            console.log('Uploading review data:', data)
            // Firestore logic
        } catch (err) {
            console.error('Failed to upload review data:', err)
        }
    }

    // When navigating away via router
    onBeforeRouteLeave((to, from, next) => {
        uploadSRSUpdates()
        next()
    })

    // When closing the tab
    onMounted(() => {
        window.addEventListener('beforeunload', uploadSRSUpdates)
    })

    onUnmounted(() => {
        window.removeEventListener('beforeunload', uploadSRSUpdates)
    })
}
