<?php

namespace App\Form;

use App\Entity\Pages;
use App\Entity\Users;
use App\Repository\UsersRepository;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use phpDocumentor\Reflection\PseudoTypes\False_;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class PageUserEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $networks= [
            "Facebook" => "Facebook",
            "Instagram" => "Instagram",
            "Twitter" => "Twitter",
            "Youtube" => "Youtube",
        ];
        
        $builder
            ->add('presentation', CKEditorType::class)
            ->add('networks', ChoiceType::class, [
                'choices' => $networks,
                'expanded' => true,
                // 'multiple' => true
            ])

            ->add('images', FileType::class,[
                'required' => false,
                'data_class' => null,
                'label' => false,
                'multiple' => true,
                'mapped' => false,
                // 'contraints' => [
                //     new File([
                //         'maxSize' => '10M',
                //         'mimeTypes' => [
                //             'image/jpg',
                //             'image/jpeg',
                //             'image/png'
                //         ],
                //         'mimeTypesMessage' => 'error Image'
                //     ])
                // ]
            ])

            ->add('Valider', SubmitType::class, [
                'attr' =>[
                    'class' => 'btn_play'
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Pages::class,
        ]);
    }
}
