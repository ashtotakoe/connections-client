import { inject } from '@angular/core'
import { type ActivatedRouteSnapshot, type ResolveFn, Router } from '@angular/router'
import { type Observable, of, tap } from 'rxjs'

import { YoutubeResponseService } from '../../core/services/youtube-response.service'
import type { SearchItem } from '../../shared/models/search-item.model'

export const detailsResolver: ResolveFn<SearchItem | null> = (
  route: ActivatedRouteSnapshot,
): Observable<SearchItem | null> => {
  const state = inject(YoutubeResponseService)
  const router = inject(Router)

  const id = route.paramMap.get('id')

  if (!id) {
    return of(null)
  }

  return state.getVideoById(id).pipe(
    tap(value => {
      if (!value) {
        router.navigate(['/', 'not-found']).catch(({ message }: Error) => message ?? null)
      }
    }),
  )
}
