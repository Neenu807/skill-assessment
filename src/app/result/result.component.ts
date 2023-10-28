
import { Component, Input } from '@angular/core';
import { columnChartOptions1 } from '../models/column-chart1';
import { columnChartOptions2 } from '../models/column-chart2';
import { columnChartOptions3 } from '../models/column-chart3';
import { columnChartOptions4 } from '../models/column-chart4';
import { columnChartOptions5 } from '../models/column-chart5';
import { columnChartOptions6 } from '../models/column-chart6';
import { columnChartOptions7 } from '../models/column-chart7';
import { MediaChange,MediaObserver } from '@angular/flex-layout';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() questions: any[] = []; 
  @Input() userAnswers: any;
  columnChart1 :Chart= new Chart(columnChartOptions1);
  columnChart2 :Chart= new Chart(columnChartOptions2);
  columnChart3 :Chart= new Chart(columnChartOptions3);
  columnChart4 :Chart= new Chart(columnChartOptions4);
  columnChart5 :Chart= new Chart(columnChartOptions5);
  columnChart6 :Chart= new Chart(columnChartOptions6);
  columnChart7 :Chart= new Chart(columnChartOptions7);
 
  resultGridCols: number=2;
  cardColspan:number=1;


  explanations: any = {
    'Lost and Alone: What immediate actions will you take to ensure your safety?': [
      'Skills Assessment: Risk Management Abilities: High, Logical Thinking: Medium, Insight into Culture and Environment: Low',
      'Skills Assessment: Logical Thinking: High, Problem-Solving: Medium, Risk Management Abilities: Medium',
      'Skills Assessment: Risk Management Abilities: Low, Logical Thinking: Low, Problem-Solving: Medium',
      'Skills Assessment: Problem-Solving: High, Insight into Culture and Environment: Medium, Logical Thinking: Medium'
    ],
    'How will you attempt to signal or communicate your situation to the group using the resources around you?': [
      'Skills Assessment: Logical Thinking: Low,Risk Management Abilities: Low, Problem-Solving: Low',
      'Skills Assessment:Problem-Solving: Medium, Logical Thinking: Medium, Risk Management Abilities: Medium',
      'Skills Assessment: Problem-Solving: High, Risk Management Abilities: Medium, Insight into Culture and Environment: Medium (if understanding local fire safety norms)',
      'Skills Assessment:Logical Thinking: High, Problem-Solving: Medium, Risk Management Abilities: High'
    ],
    'Choosing a Direction: Will you follow the mysterious trail back to the starting point or venture forward to the mystical endpoint?': [
      'Skills Assessment: Decision-Making Processes: Medium, Clarity in Reasoning: High, Time Management Skills: High, Strategic Thinking: Low',
      'Skills Assessment: Decision-Making Processes: Low, Clarity in Reasoning: Low, Time Management Skills: Low, Strategic Thinking: Low',
      'Skills Assessment: Decision-Making Processes: High, Clarity in Reasoning: Medium, Time Management Skills: Medium, Strategic Thinking: High',
      'Skills Assessment: Decision-Making Processes: High, Clarity in Reasoning: High, Time Management Skills: High, Strategic Thinking: High',
      'Skills Assessment: Decision-Making Processes: Medium, Clarity in Reasoning: Medium, Time Management Skills: Low, Strategic Thinking: Medium'
    ],
    'Nightfall Approaches: As darkness falls and the forest whispers, what actions will you take to find shelter or continue your journey?': [
      'Skills Assessment: Adaptability: Medium, Presence of Mind: High, Courage in Face of Uncertainty: Low, Self-Awareness: High',
      'Skills Assessment:Adaptability: High, Presence of Mind: Medium, Courage in Face of Uncertainty: High, Self-Awareness: Medium',
      'Skills Assessment:Adaptability: Low, Presence of Mind: Medium, Courage in Face of Uncertainty: Medium, Self-Awareness: Low',
      'Skills Assessment: Adaptability: Medium, Presence of Mind: Low, Courage in Face of Uncertainty: Low, Self-Awareness: Low, Cultural Sensitivity: High',
      'Skills Assessment:Adaptability: High, Presence of Mind: High, Courage in Face of Uncertainty: Medium, Self-Awareness: High'
    ],
    'A Crying Voice: Amidst the rustling leaves, you hear a faint crying voice that resembles a friend\'s. Do you follow it or stay put? What\'s your plan?': [
      'Skills Assessment: Empathy: High, Risk Assessment: High, Visualization: High, Decision Making: High',
      'Skills Assessment: Empathy: High, Risk Assessment: Medium, Visualization: Medium, Decision Making: Medium',
      'Skills Assessment: Empathy: Low, Risk Assessment: High, Visualization: High, Decision Making: Medium',
      'Skills Assessment: Empathy: High, Risk Assessment: Low, Visualization: Low, Decision Making: Low',
      'Skills Assessment: Empathy: Medium, Risk Assessment: Medium, Visualization: Medium, Decision Making: Medium, Cultural Sensitivity: High'
    ],
    'Sunrise in the Forest: As the first rays of the sun pierce through the canopy, what will be your first action? Describe your feelings and observations': [
      'Skills Assessment:Positivity: Medium, Artistic Appreciation: High, Visualization: High, Planning Skills: Medium',
      'Skills Assessment: Positivity: High, Artistic Appreciation: Low, Visualization: High, Planning Skills: High',
      'Skills Assessment: Positivity: High, Artistic Appreciation: Medium, Visualization: Low, Planning Skills: Low',
      'Skills Assessment: Positivity: Medium, Artistic Appreciation: Medium, Visualization: Low, Planning Skills: Low, Cultural Connection: High',
      'Skills Assessment: Positivity: Medium, Artistic Appreciation: High, Visualization: Medium, Planning Skills: Low'
    ],
    'Reunion with the Group: You finally emerge from the forest and find the trekking group. What are your actions and emotions upon this joyful reunion?': [
      'Skills Assessment: Emotional Balance: Low, Communication Skills: Medium, Positive Thinking: High, Social Intelligence: High',
      'Skills Assessment: Emotional Balance: High, Communication Skills: High, Positive Thinking: Medium, Social Intelligence: Medium',
      'Skills Assessment: Emotional Balance: High, Communication Skills: High, Positive Thinking: High, Social Intelligence: High',
      'Skills Assessment:Emotional Balance: High, Communication Skills: Low, Positive Thinking: Medium, Social Intelligence: Low',
      'Skills Assessment: Emotional Balance: Medium, Communication Skills: Medium, Positive Thinking: Medium, Social Intelligence: Medium, Cultural Awareness: High'
    ]
  };
  constructor(private mediaObserver:MediaObserver){}
  ngOnInit():void{
    this.mediaObserver.asObservable().subscribe((media:MediaChange[])=>{
      if(media.some(mediaChange=>mediaChange.mqAlias=="lt-sm")){
        this.resultGridCols=1;
      }
      else if(media.some(mediaChange=>mediaChange.mqAlias=="lt-md")){
        this.resultGridCols=2;
      }
      else{
        this.resultGridCols=3;
      }
    });
  }
  
     getExplanation(question: string, selectedOption: string) {
    
    const questionData = this.questions.find(q => q.question === question);
    
    if (questionData) {
      const selectedOptionIndex = questionData.options.indexOf(selectedOption);
      //console.log("s index", selectedOptionIndex)
      //console.log("s op", selectedOption)
      //console.log("ques", question)
      //console.log("q dat", questionData)
      //console.log("sample",this.explanations[question] )
      if (
        
        selectedOptionIndex >= 0 &&
        this.explanations[question] &&
        selectedOptionIndex < this.explanations[question].length
      ) {
        return this.explanations[question][selectedOptionIndex];
      }
    }
  
   // return 'Explanation not found';
  }
  
  
}
