import { parseISO, format } from 'date-fns'
import React from "react";

type Props = {
  dateString: string,
  children?: never,
}

export const DateFormater: React.FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
