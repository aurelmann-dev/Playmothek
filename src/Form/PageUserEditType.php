<?php

namespace App\Form;

use App\Entity\Pages;
use App\Entity\Users;
use App\Repository\UsersRepository;
use Symfony\Component\Form\AbstractType;
use phpDocumentor\Reflection\PseudoTypes\False_;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class PageUserEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('presentation')
            ->add('networks')
            // ->add('user', EntityType::class, [
            //     'class' => Users::class,
            //     // choix par id + pseudo
            //     'choice_label' => 'page_for_user',
            //     // enregistrement de l'id
            //     'query_builder' => function (UsersRepository $user_id) {
            //         return $user_id->createQueryBuilder('id')
            //             ->orderBy('id.firstname', 'ASC');
            //     }
            // ])

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

            ->add('Valider', SubmitType::class);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Pages::class,
        ]);
    }
}
