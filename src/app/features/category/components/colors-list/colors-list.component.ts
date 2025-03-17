import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { CategoryService } from '../../service/category.service';
import { categoryBackgroundColors } from '../../constants/category-colors';

const MODULES = [MatDivider]

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [...MODULES],
  template: `
  <section class="flex flex-col gap-4 h-auto mb-4">
      <mat-divider class="h-full opcacity-50"/>

      <div class="flex flex-wrap justify-center items-center mt-4 px-2 gap-4">
          @for(category of categories(); track category.id){
            <span class="select-none opacity-70 hover:opacity-100 flex items-center justify-center {{categoryBackgroundColors[category.color]}} px-4 py-2 rounded-2xl w-[80px] text-center text-white font-semibold">
                {{category.name}}
            </span>
          }
      </div>
  </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsListComponent {
  private readonly categoryService = inject(CategoryService)
  
  public categories = this.categoryService.categories

  public categoryBackgroundColors = categoryBackgroundColors
 }
