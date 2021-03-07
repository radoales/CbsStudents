class Event {
  constructor(
    id,
    title,
    description,
    startDate,
    endDate,
    location,
    organisation,
    thumbnail,
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.startDate = startDate
    this.endDate = endDate
    this.location = location
    this.organisation = organisation
    this.thumbnail = thumbnail
  }
}

export default Event
