// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges
export function mergeRanges(meetingRanges) {
  const sortedMeetingRanges = meetingRanges.sort(
    (a, b) => a.startTime - b.startTime
  )

  const consolidatedRanges = [sortedMeetingRanges[0]]

  for (let i = 0; i < sortedMeetingRanges.length; i++) {
    const nextMeeting = sortedMeetingRanges[i]
    const lastMergedMeeting = consolidatedRanges[consolidatedRanges.length - 1]

    if (nextMeeting.endTime <= lastMergedMeeting.endTime) {
      continue
    } else if (
      (nextMeeting.startTime <= lastMergedMeeting.endTime) &
      (nextMeeting.endTime >= lastMergedMeeting.endTime)
    ) {
      consolidatedRanges.pop()
      consolidatedRanges.push({
        startTime: lastMergedMeeting.startTime,
        endTime: nextMeeting.endTime
      })
    } else {
      consolidatedRanges.push(nextMeeting)
    }
  }

  return consolidatedRanges
}
