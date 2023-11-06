import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { VideoCardComponent } from './video-card.component'

describe('SearchItemComponent', () => {
  let component: VideoCardComponent
  let fixture: ComponentFixture<VideoCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCardComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(VideoCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
